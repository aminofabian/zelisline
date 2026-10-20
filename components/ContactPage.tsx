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
    <dl className="mt-12 border-t border-grey-200">
      {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-5 border-b border-grey-200 py-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center text-brass">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">{label}</dt>
            <dd className="mt-1 font-display text-lg font-medium">
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
    <section aria-labelledby="contact-heading" className="bg-grey-50">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>Correspondence</Eyebrow>
            <h2 id="contact-heading" className="mt-6 font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Write to the studio
            </h2>
            <p className="mt-6 max-w-[36ch] text-pretty text-lg leading-[1.7] text-ink-muted">
              Tell us what you are working on. We reply with honest advice on scope, timeline and cost.
            </p>
            <ContactChannels />
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              We usually reply within a day.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-paper p-7 text-ink sm:p-12">
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <fieldset>
                  <legend className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">I am a</legend>
                  <div className="flex gap-6 border-b border-grey-200">
                    {ROLES.map(({ id, label }) => {
                      const isActive = formData.role === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setFormData((prev) => ({ ...prev, role: id }))}
                          className={cn(
                            "-mb-px border-b px-0 py-3 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200",
                            isActive ? "border-brass text-ink" : "border-transparent text-ink-muted hover:text-ink"
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
                    className="flex items-start gap-3 bg-grey-50 px-4 py-3 text-sm"
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
