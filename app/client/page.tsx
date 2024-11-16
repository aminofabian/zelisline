'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Phone, Lock, ArrowRight, Check, FileText, ChevronRight } from 'lucide-react';

interface ProjectStatus {
  id: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  title: string;
  description: string;
  progress: number;
  lastUpdate: string;
}

export default function ClientPage() {
  const { toast } = useToast();
  const [step, setStep] = useState<'phone' | 'otp' | 'dashboard'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectStatus[]>([
    {
      id: '1',
      status: 'in-progress',
      title: 'Website Development',
      description: 'Modern responsive website with Next.js',
      progress: 65,
      lastUpdate: '2 hours ago'
    },
    {
      id: '2',
      status: 'planning',
      title: 'Digital Marketing Campaign',
      description: 'Social media and SEO optimization',
      progress: 25,
      lastUpdate: '1 day ago'
    }
  ]);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Integrate with your SMS service to send OTP
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
      
      toast({
        title: "✨ OTP Sent!",
        description: "Please check your phone for the verification code.",
        duration: 5000,
      });
      
      setStep('otp');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Verify OTP with your backend
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
      
      toast({
        title: "🎉 Welcome!",
        description: "Successfully verified. Redirecting to your dashboard...",
        duration: 5000,
      });
      
      setStep('dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value !== '' && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const getStatusColor = (status: ProjectStatus['status']) => {
    switch (status) {
      case 'planning': return 'bg-blue-500';
      case 'in-progress': return 'bg-orange-500';
      case 'review': return 'bg-purple-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {step === 'phone' && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Client Login</h2>
                <p className="mt-2 text-gray-600">Enter your phone number to get started</p>
              </div>

              <form onSubmit={handlePhoneSubmit}>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 h-5 w-5" />
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="+254 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white shadow-lg ${
                    isLoading 
                      ? 'bg-gray-400' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                  } transition-all duration-300`}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Verify OTP</h2>
                <p className="mt-2 text-gray-600">Enter the code sent to {phone}</p>
              </div>

              <form onSubmit={handleOtpSubmit}>
                <div className="mb-6">
                  <div className="flex justify-between gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-14 h-14 text-center text-2xl border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      />
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white shadow-lg ${
                    isLoading 
                      ? 'bg-gray-400' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                  } transition-all duration-300`}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Verify
                      <Lock className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {step === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your Projects</h2>
                <p className="mt-2 text-gray-600">Track your project progress</p>
              </div>

              <div className="space-y-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gradient-to-br from-white to-orange-50 border border-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-orange-600">
                            {project.progress}% Complete
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-gray-600">
                            Updated {project.lastUpdate}
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-orange-500 to-orange-600"
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                    >
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}