import { site } from "@/data/site";

interface ProjectInquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  projectDetails?: string;
}

/** Escape user-supplied values before they are interpolated into email HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LABEL = "margin:0 0 6px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#5C5C5C;";
const VALUE = "margin:0;font-size:15px;line-height:1.6;white-space:pre-line;color:#0A0A0A;";

export function emailShell(heading: string, subheading: string, contentHtml: string): string {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#F4F4F4;font-family:Arial,Helvetica,sans-serif;color:#0A0A0A;">
    <div style="max-width:600px;margin:0 auto;border:2px solid #0A0A0A;background:#FFFFFF;">
      <div style="background:#0A0A0A;color:#FFFFFF;padding:24px 28px;">
        <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#BDBDBD;">Zelisline</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;letter-spacing:-0.02em;">${heading}</h1>
        <p style="margin:6px 0 0;font-size:14px;color:#BDBDBD;">${subheading}</p>
      </div>
      <div style="padding:28px;">${contentHtml}</div>
      <div style="border-top:2px solid #0A0A0A;padding:20px 28px;font-size:12px;color:#5C5C5C;">
        <p style="margin:0;">Zelisline · ${site.studio} · ${site.coordinates}</p>
        <p style="margin:4px 0 0;">${site.email} · ${site.phone.display}</p>
      </div>
    </div>
  </body>
</html>`;
}

export function emailField(label: string, value: string): string {
  return `<div style="padding:14px 0;border-bottom:1px solid #E8E8E8;">
    <p style="${LABEL}">${label}</p>
    <p style="${VALUE}">${value}</p>
  </div>`;
}

export const generateProjectInquiryEmail = (data: ProjectInquiryData) => {
  const { name, email, phone, company, message, projectDetails } = data;
  const details = message || projectDetails || "";

  const rows = [
    emailField("From", escapeHtml(name)),
    emailField("Email", escapeHtml(email)),
    phone ? emailField("Phone", escapeHtml(phone)) : "",
    company ? emailField("Company", escapeHtml(company)) : "",
    emailField("Message", escapeHtml(details)),
  ].join("");

  return emailShell("New project inquiry", "A new message from your website", rows);
};
