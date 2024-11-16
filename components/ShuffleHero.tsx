import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaStar, FaShieldAlt, FaClock, FaCheck } from "react-icons/fa";
import ProjectInquiryModal from "./ProjectInquiryModal";
import type { ShuffleHeroProps } from "@/types/components";

const ShuffleHero: React.FC<ShuffleHeroProps> = ({ 
  subTitle, 
  title = "Transform Your Ideas into Digital Reality",
  bgImage = "/hero-bg.jpg",
  buttons = [
    { link: "/contact", text: "Get Started" },
    { link: "/portfolio", text: "View Portfolio" }
  ],
  description = "We craft stunning websites that convert visitors into customers. Join 500+ satisfied clients who trust us with their online presence.",
  trustIndicators = [
    { icon: FaStar, text: "5-Star Rated", color: "text-amber-500" },
    { icon: FaShieldAlt, text: "100% Satisfaction", color: "text-emerald-500" },
    { icon: FaClock, text: "Quick Delivery", color: "text-blue-500" }
  ],
  features = [
    "Modern, Responsive Design",
    "SEO Optimization",
    "Fast Loading Speed",
    "24/7 Support"
  ]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div
              variants={childVariants}
              className="space-y-2"
            >
              {subTitle && (
                <h2 className="text-lg font-semibold tracking-wide text-orange-500 uppercase">
                  {subTitle}
                </h2>
              )}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                {title}
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                {description}
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4"
            >
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                  <span className="text-white">{indicator.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={childVariants}
              className="space-y-4"
            >
              <ul className="grid gap-2 grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-400">
                    <FaCheck className="w-4 h-4 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col gap-3 min-[400px]:flex-row"
            >
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors 
                    ${index === 0 
                      ? 'bg-orange-500 text-white shadow hover:bg-orange-600' 
                      : 'border border-gray-700 text-white hover:bg-gray-900'
                    }`}
                >
                  {button.text}
                  {index === 0 && <FaArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
              <Image
                src={bgImage}
                alt="Hero Image"
                width={600}
                height={400}
                className="object-cover w-full h-full opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <ProjectInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ShuffleHero;
