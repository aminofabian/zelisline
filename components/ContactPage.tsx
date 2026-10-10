"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone, X } from "lucide-react";
import FormField from "@/components/forms/FormField";
import { INPUT_CLASSES, TEXTAREA_CLASSES } from "@/components/forms/inputStyles";
import SimpleCaptcha from "@/components/SimpleCaptcha";
import Action from "@/components/system/Action";
import Eyebrow from "@/components/system/Eyebrow";
import { useToast } from "@/components/ui/use-toast";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type ClientRole = "business" | "individual" | "agency";

interface ContactForm {
  role: ClientRole;
  name: string;
  service: string;
  email: string;
  message: string;
  termsAccepted: boolean;
}

type ContactErrors = Partial<Record<keyof ContactForm | "captcha", string>>;

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

const ROLES: { id: ClientRole; label: string }[] = [
  { id: "business", label: "Business" },
  { id: "individual", label: "Individual" },
  { id: "agency", label: "Agency" },
];

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "UI/UX Design",
  "E-commerce Solutions",
  "Custom Web Applications",
  "Website Maintenance",
  "SEO Services",
  "Other",
];

const CONTACT_CHANNELS = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone.display, href: site.phone.href },
  { icon: MapPin, label: "Studio", value: site.studio, href: undefined },
];

const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const STATUS_TIMEOUT_MS = 6000;
const TOAST_DURATION_MS = 3000;
const RESULT_TOAST_DURATION_MS = 5000;

const INITIAL_FORM: ContactForm = {
  role: "business",
  name: "",
  service: "",
  email: "",
  message: "",
  termsAccepted: false,
};

const validate = (form: ContactForm, isCaptchaValid: boolean): ContactErrors => {
  const errors: ContactErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!form.service) errors.service = "Choose the service you need";
  if (!form.message.trim()) errors.message = "Message is required";
  if (!form.termsAccepted) errors.termsAccepted = "Please accept the terms to continue";
  if (!isCaptchaValid) errors.captcha = "Please complete the verification";
  return errors;
};

function ContactChannels() {
  return (
    <dl className="mt-12 border-t border-ink">
      {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-5 border-b border-ink py-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink bg-paper">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{label}</dt>
            <dd className="display-wide mt-1 font-display text-lg font-bold">
              {href ? (
                <a href={href} className="underline-offset-4 hover:underline">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [formErrors, setFormErrors] = useState<ContactErrors>({});
  const [captchaKey, setCaptchaKey] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const nextValue = type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    if (formErrors[name as keyof ContactErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const reportInvalid = (title: string, description: string) => {
    toast({ title, description, variant: "destructive", duration: TOAST_DURATION_MS });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const errors = validate(formData, isCaptchaValid);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      reportInvalid("Form incomplete", "Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Thanks — your message is on its way." });
        setFormData(INITIAL_FORM);
        setIsCaptchaValid(false);
        setCaptchaKey((key) => key + 1);
      } else {
        setSubmitStatus({ type: "error", message: result.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: "error", message: "An unexpected error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), STATUS_TIMEOUT_MS);
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="border-b border-ink bg-grey-50">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 id="contact-heading" className="display-wide mt-6 font-display text-[2.1rem] font-bold leading-[1.02] sm:text-5xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-muted">
              Tell us what you&apos;re working on and we&apos;ll come back with honest advice on scope, timeline and
              cost. No pressure, no jargon.
            </p>
            <ContactChannels />
            <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted">
              We usually reply within a day.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-ink bg-paper p-6 text-ink sm:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <fieldset>
                  <legend className="mb-3 font-mono text-[12px] uppercase tracking-[0.1em]">I am a…</legend>
                  <div className="grid grid-cols-3 border border-ink">
                    {ROLES.map(({ id, label }, index) => {
                      const isActive = formData.role === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setFormData((prev) => ({ ...prev, role: id }))}
                          className={cn(
                            "px-3 py-3 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors",
                            index < ROLES.length - 1 && "border-r border-ink",
                            isActive ? "bg-ink text-paper" : "hover:bg-grey-50"
                          )}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Name" htmlFor="name" required error={formErrors.name}>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-invalid={Boolean(formErrors.name)}
                      autoComplete="name"
                      className={INPUT_CLASSES}
                    />
                  </FormField>
                  <FormField label="Email" htmlFor="email" required error={formErrors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(formErrors.email)}
                      autoComplete="email"
                      className={INPUT_CLASSES}
                    />
                  </FormField>
                </div>

                <FormField label="What do you need?" htmlFor="service" required error={formErrors.service}>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(formErrors.service)}
                    className={`${INPUT_CLASSES} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Project details" htmlFor="message" required error={formErrors.message}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="A little about your goals, timeline and budget…"
                    aria-invalid={Boolean(formErrors.message)}
                    className={TEXTAREA_CLASSES}
                  />
                </FormField>

                <div>
                  <label htmlFor="termsAccepted" className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      id="termsAccepted"
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      aria-invalid={Boolean(formErrors.termsAccepted)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
                    />
                    <span>I accept the terms and conditions.</span>
                  </label>
                  {formErrors.termsAccepted && (
                    <p role="alert" className="mt-2 text-sm font-medium">
                      {formErrors.termsAccepted}
                    </p>
                  )}
                </div>

                <div>
                  <SimpleCaptcha key={captchaKey} onValidate={setIsCaptchaValid} />
                  {formErrors.captcha && (
                    <p role="alert" className="mt-2 text-sm font-medium">
                      {formErrors.captcha}
                    </p>
                  )}
                </div>

                <Action type="submit" disabled={isSubmitting} className="w-full" arrow={!isSubmitting}>
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                  {isSubmitting ? "Sending…" : "Send message"}
                </Action>

                {submitStatus && (
                  <div
                    role="status"
                    className="flex items-start gap-3 border border-ink bg-grey-50 px-4 py-3 text-sm font-medium"
                  >
                    {submitStatus.type === "success" ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
