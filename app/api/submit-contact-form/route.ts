// app/api/submit-contact-form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailField, emailShell, escapeHtml } from "@/lib/emailTemplate";
import { site } from "@/data/site";

// Credentials come from the environment (set in Coolify), never from source.
const EMAIL_USER = process.env.user?.replace(/"/g, "") || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: process.env.pass?.replace(/"/g, "") || "",
  },
});

const ROLE_LABELS: Record<string, string> = {
  business: "Business client",
  individual: "Individual client",
  agency: "Agency partner",
};

interface ContactPayload {
  role?: string;
  name?: string;
  service?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const { role = "", name = "", service = "", email = "", message = "" }: ContactPayload = await request.json();

    if (!role || !name || !service || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const roleLabel = ROLE_LABELS[role] ?? "Client";

    const adminEmailHtml = emailShell(
      "New project inquiry",
      "A new message from your website",
      [
        emailField("Client type", escapeHtml(roleLabel)),
        emailField("Name", escapeHtml(name)),
        emailField("Service", escapeHtml(service)),
        emailField("Email", escapeHtml(email)),
        emailField("Message", escapeHtml(message)),
      ].join("")
    );

    const clientEmailHtml = emailShell(
      `Thank you, ${escapeHtml(name)}`,
      "We've received your inquiry",
      `${emailField("Service", escapeHtml(service))}${emailField("Your message", escapeHtml(message))}
       <p style="margin:20px 0 0;font-size:15px;line-height:1.6;color:#5C5C5C;">
         Our team will review your requirements and reply within 24–48 hours.
       </p>`
    );

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `New ${service} inquiry — ${roleLabel}`,
      html: adminEmailHtml,
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Zelisline",
      html: clientEmailHtml,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We have received your inquiry and will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: `Failed to send email. Please try again or email us directly at ${site.email}.` },
      { status: 500 }
    );
  }
}
