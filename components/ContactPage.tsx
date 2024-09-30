'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Mail, MessageSquare, Send, Check, X, UserCircle, Users, HeartHandshake, HeartHandshakeIcon } from 'lucide-react';
import { EnhancedHeader } from './EnhancedHeader';


interface FormData {
  role: 'client' | 'writer' | 'partner' | '';
  name: string;
  service: string;
  email: string;
  message: string;
  termsAccepted: boolean;
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
  className={`flex items-center space-x-4 group ${isActive ? 'bg-orange-50' : ''} rounded-lg p-2 transition-all duration-300`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  >
  <motion.div 
  className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'} shadow-lg transition-all duration-300`}
  animate={{ rotate: isActive ? 360 : 0 }}
  transition={{ duration: 0.5 }}
  >
  {React.cloneElement(icon, { size: 24 })}
  </motion.div>
  {as === 'input' && (
    <motion.input
    whileFocus={{ scale: 1.02 }}
    className="flex-grow bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-lg px-2 py-1 outline-none transition-colors duration-300"
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
    className="flex-grow bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-lg px-2 py-1 outline-none appearance-none transition-colors duration-300"
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
    className="flex-grow bg-transparent border-b-2 border-gray-300 focus:border-orange-500 text-lg px-2 py-1 outline-none resize-none transition-colors duration-300"
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
  <div className="flex flex-wrap justify-center gap-4 mb-8">
  {['client', 'writer', 'partner'].map((r) => (
    <motion.button
    key={r}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
      role === r ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
    }`}
    onClick={() => onChange(r as FormData['role'])}
    type="button"
    >
    {r === 'client' && <UserCircle size={20} />}
    {r === 'writer' && <Users size={20} />}
    {r === 'partner' && <HeartHandshakeIcon size={20} />}
    <span className="capitalize">{r}</span>
    </motion.button>
  ))}
  </div>
);

const ContactForm: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    role: 'client',
    name: '',
    service: 'Content Writing',
    email: '',
    message: '',
    termsAccepted: false
  });
  const [activeField, setActiveField] = useState<keyof FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleRoleChange = (role: FormData['role']) => {
    setFormData(prev => ({ ...prev, role }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          role: 'client',
          name: '',
          service: '',
          email: '',
          message: '',
          termsAccepted: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };
  
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [formData.message]);
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="container mx-auto max-w-4xl relative">
    <motion.div 
    className="absolute top-0 left-1/2 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
    animate={{ 
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 10,
      ease: "easeInOut"
    }}
    ></motion.div>     
    <motion.div 
    className="absolute top-0 -right-4 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
    animate={{ 
      x: [0, -50, 50, 0],
      y: [0, 50, -50, 0],
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 15,
      ease: "easeInOut"
    }}
    ></motion.div>    
    <motion.div 
    className="relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-4 sm:p-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    <EnhancedHeader />
    
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
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
    options={['Content Writing', 'Editing & Proofreading', 'Content Strategy', 'SEO Optimization', 'AI Checker', 'AI Idea Generator', 'Writing Jobs', 'Other']}
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
    
    <motion.div className="flex items-center space-x-2">
    <input
    type="checkbox"
    id="terms"
    name="termsAccepted"
    checked={formData.termsAccepted}
    onChange={handleInputChange}
    className="form-checkbox h-5 w-5 text-orange-500 rounded-full"
    required
    />
    <label htmlFor="terms" className="text-sm text-gray-700">
    I hereby accept all terms and conditions.
    </label>
    </motion.div>
    
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2"
    disabled={isSubmitting}
    >
    {isSubmitting ? (
      <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
      <Send size={20} />
      </motion.div>
    ) : (
      <>
      <span>Send Enquiry</span>
      <Send size={20} />
      </>
    )}
    </motion.button>
    </form>
    
    <AnimatePresence>
    {submitStatus && (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`mt-4 p-3 rounded-lg flex items-center justify-center space-x-2 ${
        submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
      >
      {submitStatus === 'success' ? (
        <>
        <Check size={20} />
        <span>Form submitted successfully!</span>
        </>
      ) : (
        <>
        <X size={20} />
        <span>An error occurred. Please try again.</span>
        </>
      )}
      </motion.div>
    )}
    </AnimatePresence>
    </motion.div>
    </div>
    </section>
  );
};

export default ContactForm;
