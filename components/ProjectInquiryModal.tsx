import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SimpleCaptcha from './SimpleCaptcha';
import { X, Loader2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.projectDetails.trim()) errors.projectDetails = 'Project details are required';
    if (!isCaptchaValid) errors.captcha = 'Please complete the captcha verification';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      toast({
        title: "⚠️ Verification Required",
        description: "Please complete the captcha verification before submitting.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "⚠️ Form Incomplete",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "✨ Success!",
        description: (
          <div className="flex flex-col space-y-2">
            <p>Thank you for your project inquiry!</p>
            <p className="text-sm text-gray-500">
              We&apos;ve received your message and will get back to you within 24-48 hours.
            </p>
          </div>
        ),
        className: "bg-green-50 border-green-200",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDetails: '',
      });
      setIsCaptchaValid(false);
      onClose();
    } catch (error) {
      toast({
        title: "❌ Error",
        description: (
          <div className="flex flex-col space-y-2">
            <p>Failed to send your inquiry.</p>
            <p className="text-sm text-red-500">
              Please try again or contact us directly at zelisline@gmail.com
            </p>
          </div>
        ),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={onClose}
          open={isOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
            />

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle bg-white shadow-lift rounded-2xl border border-sand-200"
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="p-2 text-ink-muted hover:text-ink rounded-full hover:bg-sand-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <Dialog.Title as="h3" className="font-display text-2xl leading-6 text-ink mb-8">
                Start Your Project
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-ink ${
                        formErrors.name ? 'border-red-500' : 'border-sand-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-colors`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-ink ${
                        formErrors.email ? 'border-red-500' : 'border-sand-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-colors`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Project Details Field */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-ink ${
                      formErrors.projectDetails ? 'border-red-500' : 'border-sand-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-colors`}
                    placeholder="Tell us about your project..."
                  />
                  {formErrors.projectDetails && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.projectDetails}</p>
                  )}
                </div>

                {/* Captcha */}
                <div className="mt-6">
                  <SimpleCaptcha onValidate={setIsCaptchaValid} />
                  {formErrors.captcha && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.captcha}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={!isCaptchaValid || isLoading}
                    className={`w-full px-6 py-4 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.01] ${
                      isCaptchaValid && !isLoading
                        ? 'bg-orange-600 hover:bg-orange-700'
                        : 'bg-sand-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : isCaptchaValid ? (
                      'Submit Project Inquiry'
                    ) : (
                      'Please Complete Verification'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectInquiryModal;
