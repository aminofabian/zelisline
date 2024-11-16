'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Mail, MessageSquare, Send, Check, X, Building2, Users2, HandIcon } from 'lucide-react';
import { EnhancedHeader } from './EnhancedHeader';
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

interface InputFieldProps {
  icon: React.ReactElement;
  placeholder: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  as?: 'input' | 'select' | 'textarea';
  options?: string[];
  isActive: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  icon, placeholder, name, value, onChange, type = 'text', as = 'input', options, isActive, onFocus, onBlur 
}) => (
  <motion.div 
    className={`flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 group ${
      isActive ? 'bg-orange-50' : ''
    } rounded-lg p-4 transition-all duration-300`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isActive ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'
      } shadow-lg transition-all duration-300 flex-shrink-0`}
      animate={{ rotate: isActive ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {React.cloneElement(icon, { size: 24 })}
    </motion.div>
    {as === 'input' && (
      <motion.input
        whileFocus={{ scale: 1.02 }}
        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-base sm:text-lg px-2 py-1 outline-none transition-colors duration-300"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required
      />
    )}
    {as === 'select' && (
      <motion.select
        whileFocus={{ scale: 1.02 }}
        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-base sm:text-lg px-2 py-1 outline-none appearance-none transition-colors duration-300"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </motion.select>
    )}
    {as === 'textarea' && (
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-base sm:text-lg px-2 py-1 outline-none resize-none transition-colors duration-300 min-h-[100px]"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={3}
        required
      />
    )}
  </motion.div>
);

const RoleSelector: React.FC<{ role: string; onChange: (role: FormData['role']) => void }> = ({ role, onChange }) => (
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
    {[
      { id: 'business', icon: <Building2 size={18} />, label: 'Business' },
      { id: 'individual', icon: <User size={18} />, label: 'Individual' },
      { id: 'agency', icon: <HandIcon size={18} />, label: 'Agency' }
    ].map(({ id, icon, label }) => (
      <motion.button
        key={id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2 text-sm sm:text-base ${
          role === id ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => onChange(id as FormData['role'])}
        type="button"
      >
        {icon}
        <span>{label}</span>
      </motion.button>
    ))}
  </div>
);

const ContactForm: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    role: 'business',
    name: '',
    service: '',
    email: '',
    message: '',
    termsAccepted: false
  });
  const [activeField, setActiveField] = useState<keyof FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);
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
    if (!isCaptchaValid) errors.captcha = 'Please complete the captcha verification';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleRoleChange = (role: FormData['role']) => {
    setFormData(prev => ({ ...prev, role }));
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

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
        setFormData({
          role: 'business',
          name: '',
          service: '',
          email: '',
          message: '',
          termsAccepted: false
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };
  
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [formData.message]);
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-4 sm:py-16 lg:py-24 px-1 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="w-[98%] sm:container sm:mx-auto sm:max-w-4xl relative">
        <motion.div 
          className="absolute top-0 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -translate-x-1/2"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
        ></motion.div>     
        <motion.div 
          className="absolute top-0 -right-4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut"
          }}
        ></motion.div>    
        <motion.div 
          className="relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg sm:rounded-3xl shadow-xl p-3 sm:p-6 lg:p-8 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EnhancedHeader />
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8 mt-6 sm:mt-8">
            <RoleSelector role={formData.role} onChange={handleRoleChange} />
            
            <InputField
              icon={<User />}
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              isActive={activeField === 'name'}
              onFocus={() => setActiveField('name')}
              onBlur={() => setActiveField(null)}
            />
            <InputField
              icon={<Briefcase />}
              placeholder="Select Service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              as="select"
              options={[
                'Web Development',
                'Digital Marketing',
                'UI/UX Design',
                'E-commerce Solutions',
                'Custom Web Applications',
                'Website Maintenance',
                'SEO Services',
                'Other'
              ]}
              isActive={activeField === 'service'}
              onFocus={() => setActiveField('service')}
              onBlur={() => setActiveField(null)}
            />
            <InputField
              icon={<Mail />}
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              isActive={activeField === 'email'}
              onFocus={() => setActiveField('email')}
              onBlur={() => setActiveField(null)}
            />
            <InputField
              icon={<MessageSquare />}
              placeholder="Tell us about your project..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              as="textarea"
              isActive={activeField === 'message'}
              onFocus={() => setActiveField('message')}
              onBlur={() => setActiveField(null)}
            />
            
            <motion.div className="flex items-start sm:items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="form-checkbox h-5 w-5 text-orange-500 rounded-full mt-1 sm:mt-0"
                required
              />
              <label htmlFor="terms" className="text-sm sm:text-base text-gray-700">
                I hereby accept all terms and conditions.
              </label>
            </motion.div>

            {/* Captcha */}
            <div className="mt-8">
              <SimpleCaptcha onValidate={setIsCaptchaValid} />
              {formErrors.captcha && (
                <p className="mt-1 text-sm text-red-500">{formErrors.captcha}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              className={`w-full relative bg-gradient-to-r ${
                isSubmitting 
                  ? 'from-orange-400 to-orange-300 cursor-not-allowed' 
                  : 'from-orange-600 to-orange-400 hover:shadow-lg hover:shadow-orange-200/50'
              } text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition duration-300 flex items-center justify-center space-x-2 mt-6`}
              disabled={isSubmitting}
            >
              <div className="relative flex items-center justify-center">
                <span className={`transition-opacity duration-200 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.button>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 p-3 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <>
                      <Check size={18} className="flex-shrink-0" />
                      <span>{submitStatus.message}</span>
                    </>
                  ) : (
                    <>
                      <X size={18} className="flex-shrink-0" />
                      <span>{submitStatus.message}</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
