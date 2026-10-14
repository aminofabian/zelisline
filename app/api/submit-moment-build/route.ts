import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailField, emailShell, escapeHtml } from "@/lib/emailTemplate";
import { site } from "@/data/site";

const EMAIL_USER = process.env.user?.replace(/"/g, "") || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: process.env.pass?.replace(/"/g, "") || "",
  },
});

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

interface BuildItem {
  name?: string;
  price?: number;
  count?: number;
}

interface BuildPayload {
  email?: string;
  total?: number;
  items?: BuildItem[];
}

const formatKes = (value: number) => `KES ${value.toLocaleString("en-KE")}`;

export async function POST(request: Request) {
  try {
    const { email = "", total = 0, items = [] } = (await request.json()) as BuildPayload;

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Your build is empty." }, { status: 400 });
    }

    const summary = items
      .map((item) => {
        const count = Number(item.count ?? 1);
        const linePrice = Number(item.price ?? 0) * count;
        return `${count > 1 ? `${count} × ` : ""}${item.name ?? "Item"} — ${formatKes(linePrice)}`;
      })
      .join("\n");

    const adminHtml = emailShell(
      "New moment app request",
      "A live build from the price calculator",
      [
        emailField("Client email", `<a href="mailto:${escapeHtml(email)}" style="color:#0A0A0A;">${escapeHtml(email)}</a>`),
        emailField("Configuration", escapeHtml(summary)),
        emailField("Estimated total", escapeHtml(formatKes(Number(total)))),
      ].join("")
    );

    const clientHtml = emailShell(
      "We've got your build",
      "Here's what you asked for",
      `${emailField("Your configuration", escapeHtml(summary))}
       ${emailField("Estimated total", escapeHtml(formatKes(Number(total))))}
       <p style="margin:20px 0 0;font-size:15px;line-height:1.6;color:#5C5C5C;">
         We'll come back shortly with a firm quote and next steps.
       </p>`
    );

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `New moment app build — ${formatKes(Number(total))}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: "Your moment app build — Zelisline",
      html: clientHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Moment build request error:", error);
    return NextResponse.json(
      { error: `Couldn't send your build. Please email us at ${site.email}.` },
      { status: 500 }
    );
  }
}
