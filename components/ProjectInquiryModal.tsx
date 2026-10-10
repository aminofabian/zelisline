"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Dialog } from "@headlessui/react";
import { Loader2, X } from "lucide-react";
import SimpleCaptcha from "@/components/SimpleCaptcha";
import Action from "@/components/system/Action";
import FormField from "@/components/forms/FormField";
import { INPUT_CLASSES, TEXTAREA_CLASSES } from "@/components/forms/inputStyles";
import { useToast } from "@/components/ui/use-toast";
import { site } from "@/data/site";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
}

type InquiryErrors = Partial<Record<keyof InquiryForm | "captcha", string>>;

const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const INITIAL_FORM: InquiryForm = { name: "", email: "", phone: "", company: "", projectDetails: "" };
const TOAST_DURATION_MS = 3000;
const RESULT_TOAST_DURATION_MS = 5000;

const validate = (form: InquiryForm, isCaptchaValid: boolean): InquiryErrors => {
  const errors: InquiryErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!form.projectDetails.trim()) errors.projectDetails = "Project details are required";
  if (!isCaptchaValid) errors.captcha = "Please complete the captcha verification";
  return errors;
};

export default function ProjectInquiryModal({ isOpen, onClose }: ProjectInquiryModalProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<InquiryForm>(INITIAL_FORM);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formErrors, setFormErrors] = useState<InquiryErrors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof InquiryErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const reportInvalid = (title: string, description: string) => {
    toast({ title, description, variant: "destructive", duration: TOAST_DURATION_MS });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!isCaptchaValid) {
      reportInvalid("Verification required", "Please complete the captcha verification before submitting.");
      return;
    }

    const errors = validate(formData, isCaptchaValid);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      reportInvalid("Form incomplete", "Please fill in all required fields correctly.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send email");

      toast({
        title: "Message received",
        description: (
          <div className="flex flex-col space-y-2">
            <p>Thank you for your project inquiry!</p>
            <p className="text-sm text-ink-muted">
              We&apos;ve received your message and will get back to you within 24-48 hours.
            </p>
          </div>
        ),
        duration: RESULT_TOAST_DURATION_MS,
      });

      setFormData(INITIAL_FORM);
      setIsCaptchaValid(false);
      onClose();
    } catch {
      toast({
        title: "Something went wrong",
        description: (
          <div className="flex flex-col space-y-2">
            <p>Failed to send your inquiry.</p>
            <p className="text-sm text-ink-muted">Please try again or contact us directly at {site.email}</p>
          </div>
        ),
        variant: "destructive",
        duration: RESULT_TOAST_DURATION_MS,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const submitLabel = isLoading ? "Sending…" : isCaptchaValid ? "Submit project inquiry" : "Complete verification";

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[70]">
      <div className="fixed inset-0 bg-ink/80" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
          <Dialog.Panel className="w-full max-w-2xl border border-ink bg-paper p-6 sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <Dialog.Title as="h2" className="display-wide font-display text-2xl font-bold leading-tight sm:text-3xl">
                Start your project
              </Dialog.Title>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close inquiry form"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink hover:bg-ink hover:text-paper"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField label="Name" htmlFor="inquiry-name" required error={formErrors.name}>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(formErrors.name)}
                    className={INPUT_CLASSES}
                  />
                </FormField>

                <FormField label="Email" htmlFor="inquiry-email" required error={formErrors.email}>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    aria-invalid={Boolean(formErrors.email)}
                    className={INPUT_CLASSES}
                  />
                </FormField>

                <FormField label="Phone number" htmlFor="inquiry-phone">
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={INPUT_CLASSES}
                  />
                </FormField>

                <FormField label="Company" htmlFor="inquiry-company">
                  <input
                    id="inquiry-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={INPUT_CLASSES}
                  />
                </FormField>
              </div>

              <FormField label="Project details" htmlFor="inquiry-details" required error={formErrors.projectDetails}>
                <textarea
                  id="inquiry-details"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project…"
                  aria-invalid={Boolean(formErrors.projectDetails)}
                  className={TEXTAREA_CLASSES}
                />
              </FormField>

              <div>
                <SimpleCaptcha onValidate={setIsCaptchaValid} />
                {formErrors.captcha && (
                  <p role="alert" className="mt-2 text-sm font-medium text-ink">
                    {formErrors.captcha}
                  </p>
                )}
              </div>

              <Action type="submit" disabled={!isCaptchaValid || isLoading} className="w-full" arrow={!isLoading}>
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                {submitLabel}
              </Action>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
