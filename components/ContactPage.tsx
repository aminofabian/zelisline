'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  X,
  Building2,
  User,
  Briefcase,
} from 'lucide-react';
import SimpleCaptcha from './SimpleCaptcha';
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  role: 'business' | 'individual' | 'agency' | '';
  name: string;
  service: string;
  email: string;
  message: string;
  termsAccepted: boolean;
}

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

const roles = [
  { id: 'business', icon: Building2, label: 'Business' },
  { id: 'individual', icon: User, label: 'Individual' },
  { id: 'agency', icon: Briefcase, label: 'Agency' },
] as const;

const services = [
  'Web Development',
  'Digital Marketing',
  'UI/UX Design',
  'E-commerce Solutions',
  'Custom Web Applications',
  'Website Maintenance',
  'SEO Services',
  'Other',
];

const contactChannels = [
  { icon: Mail, label: 'Email', value: 'zelisline@gmail.com', href: 'mailto:zelisline@gmail.com' },
  { icon: Phone, label: 'Phone', value: '(+254) 714 28 2874', href: 'tel:+254714282874' },
  { icon: MapPin, label: 'Studio', value: 'Nairobi, Kenya' },
];

const inputClass =
  'w-full rounded-lg border border-sand-300 bg-white px-3.5 py-2.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    role: 'business',
    name: '',
    service: '',
    email: '',
    message: '',
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!isCaptchaValid) errors.captcha = 'Please complete the verification';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      toast({
        title: 'Verification required',
        description: 'Please complete the verification before submitting.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }
    if (!validateForm()) {
      toast({
        title: 'Form incomplete',
        description: 'Please fill in all required fields correctly.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thanks — your message is on its way.' });
        setFormData({
          role: 'business',
          name: '',
          service: '',
          email: '',
          message: '',
          termsAccepted: false,
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 6000);
  };

  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Context */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-3 max-w-[16ch] font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
              Tell us what you&apos;re working on and we&apos;ll come back with honest
              advice on scope, timeline and cost. No pressure, no jargon.
            </p>

            <dl className="mt-8">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 border-t border-sand-200 py-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-ink-muted">{label}</dt>
                    <dd className="mt-0.5 font-display text-base text-ink">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-orange-700">{value}</a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-6 font-hand text-xl text-orange-700/90">
              We usually reply within a day.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-sand-200 bg-white p-5 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role */}
                <div>
                  <span className="mb-2.5 block text-sm font-medium text-ink">I am a…</span>
                  <div className="flex flex-wrap gap-2">
                    {roles.map(({ id, icon: Icon, label }) => {
                      const isActive = formData.role === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role: id }))}
                          className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? 'border-orange-600 bg-orange-50 text-orange-700'
                              : 'border-sand-300 text-ink-soft hover:border-ink/30'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                    {formErrors.name && <p className="mt-1.5 text-xs text-red-600">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      required
                    />
                    {formErrors.email && <p className="mt-1.5 text-xs text-red-600">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2379716B' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Project details <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="A little about your goals, timeline and budget…"
                    className={`${inputClass} resize-y`}
                    required
                  />
                  {formErrors.message && <p className="mt-1.5 text-xs text-red-600">{formErrors.message}</p>}
                </div>

                <label htmlFor="terms" className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                  <input
                    id="terms"
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mt-0.5 h-4 w-4 rounded border-sand-400 text-orange-600 accent-orange-600"
                    required
                  />
                  <span>I accept the terms and conditions.</span>
                </label>

                <div>
                  <SimpleCaptcha onValidate={setIsCaptchaValid} />
                  {formErrors.captcha && <p className="mt-1.5 text-xs text-red-600">{formErrors.captcha}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-colors ${
                    isSubmitting ? 'cursor-not-allowed bg-orange-300' : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-800'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {submitStatus.type === 'success' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      <span>{submitStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
