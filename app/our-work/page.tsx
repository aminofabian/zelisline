'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Phone, Calendar, Users, Target } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  duration: string;
  techStack: string[];
  otherDetails: string;
  link: string;
  client: {
    name: string;
    contact: {
      email: string;
      phone: string;
    };
  };
  teamSize?: string;
  keyObjectives?: string;
  testimonial: {
    text: string;
    author: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alexawriters – Premium Article Writing Platform",
    image: "/alexawriters.png",
    description: "AlexaWriters is a premium article writing platform built with Next.js, featuring a client dashboard for placing orders, a writer dashboard for managing tasks, and an admin dashboard for overseeing operations. It integrates AI tools for generating content ideas, managing writers, and optimizing order fulfillment, designed for seamless efficiency.",
    duration: "2 months",
    techStack: ["Next.js", "Node.js", "MongoDB", "AWS"],
    otherDetails: "Built with Next.js and AI for Idea Generation and Writer Management",
    link: "https://alexawriters.com",
    client: {
      name: "AlexaWriters Inc.",
      contact: {
        email: "contact@alexawriters.com",
        phone: "+1 (555) 123-4567"
      }
    },
    teamSize: "2 developers, 1 designer",
    keyObjectives: "Enhance UX, Streamline Operations, Automate Writer Management",
    testimonial: {
      text: "AlexaWriters transformed how we manage content, automating workflows and improving efficiency. Their integration of AI made a huge difference.",
      author: "Dolphine Peace, CEO of AlexaWriters Inc."
    }
  },
  {
    id: 2,
    title: "FItrii - Community Support Platform",
    image: "/fitrii.png",
    description: "FItrii is a platform where people join support communities to help each other. It features integrated payment systems and is designed for easy community building and mutual assistance.",
    duration: "3 months",
    techStack: ["NextJS", "React", "Zustand", "PostgreSQL"],
    otherDetails: "Mobile app for Android and iOS in development using React Native",
    link: "https://fitrii.com",
    client: {
      name: "FItrii Inc.",
      contact: {
        email: "contact@fitrii.com",
        phone: "+1 (555) 987-6543"
      }
    },
    teamSize: "3 developers, 2 designer",
    keyObjectives: "Build Support Communities, Facilitate Mutual Aid, Enable Easy Payments",
    testimonial: {
      text: "FItrii has revolutionized how we connect people in need with those who can help. The platform's ease of use and payment integrations make it incredibly effective.",
      author: "Mike Nester, Founder of FItrii Inc."
    }
  },
  {
    id: 3,
    title: "Mediamasses - Social Media Following Marketplace",
    image: "/mediamassess.png",
    description: "Mediamasses is a platform that sells social media following across various platforms including YouTube and Instagram. It integrates third-party APIs for service processing and Kopokopo APIs for M-Pesa payments.",
    duration: "2 weeks",
    techStack: ["Next.js", "Nest.js"],
    otherDetails: "Integrated with third-party APIs for service processing and Kopokopo for M-Pesa payments",
    link: "https://mediamasses.com",
    client: {
      name: "Mediamasses Inc.",
      contact: {
        email: "contact@mediamasses.com",
        phone: "+254 700 123456"
      }
    },
    teamSize: "2 developers, 1 designer",
    keyObjectives: "Sell Social Media Following, Process Services via APIs, Enable M-Pesa Payments",
    testimonial: {
      text: "Mediamasses has streamlined our social media growth services. The integration with various platforms and M-Pesa payments has significantly improved our operations.",
      author: "Xtian Dela, CEO of Mediamasses Inc."
    }
  },
  {
    id: 4,
    title: "Pulse Labs - Innovative UX Research Platform",
    image: "/pulselabs.png",
    description: "Pulse Labs is at the forefront of revolutionizing user experience research and analytics. Our proprietary technology captures real-time, context-rich user interactions in a privacy-conscious manner, providing human-centered insights since 2017.",
    duration: "2 months",
    techStack: ["React", "React Query", "Duda CMS"],
    otherDetails: "Proprietary technology for capturing real-time user interactions",
    link: "https://pulselabs.ai",
    client: {
      name: "Pulse Labs",
      contact: {
        email: "info@pulselabs.ai",
        phone: "+1 (206) 555-0123"
      }
    },
    teamSize: "4 developers, 2 designers",
    keyObjectives: "Revolutionize UX Research, Provide Real-time Analytics, Ensure Privacy",
    testimonial: {
      text: "Pulse Labs has transformed our approach to user experience research. Their innovative technology provides us with insights we never thought possible, all while maintaining user privacy.",
      author: "Dr. Emily Chen, Head of UX Research at TechGiant Corp."
    }
  }
  
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div 
  className="flex flex-col mb-16 p-8 bg-gradient-to-br from-orange-50 via-white to-purple-50 rounded-lg shadow-lg"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  >
  <div className="flex flex-col md:flex-row mb-6">
  <div className="w-full md:w-1/3 mr-0 md:mr-8 mb-6 md:mb-0">
  <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg shadow-sm w-full h-auto" />
  </div>
  <div className="w-full md:w-2/3">
  <h2 className="text-3xl font-bold mb-4 text-orange-500">{project.id}. {project.title}</h2>
  <p className="mb-4 text-gray-700">{project.description}</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
  <div className="flex items-center text-gray-600">
  <Calendar className="mr-2 w-4 h-4 text-orange-500" />
  <span><strong>Duration:</strong> {project.duration}</span>
  </div>
  {project.teamSize && (
    <div className="flex items-center text-gray-600">
    <Users className="mr-2 w-4 h-4 text-orange-500" />
    <span><strong>Team:</strong> {project.teamSize}</span>
    </div>
  )}
  {project.keyObjectives && (
    <div className="flex items-center text-gray-600">
    <Target className="mr-2 w-4 h-4 text-orange-500" />
    <span><strong>Key Objectives:</strong> {project.keyObjectives}</span>
    </div>
  )}
  </div>
  <p className="mb-4 text-gray-600"><strong className="text-orange-500">Tech Stack:</strong> {project.techStack.join(", ")}</p>
  <p className="mb-4 text-gray-600"><strong className="text-orange-500">Results:</strong> {project.otherDetails}</p>
  <Link href={project.link} target='_blank' className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200">
  View Project <ExternalLink className="ml-1 w-4 h-4" />
  </Link>
  </div>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-inner flex flex-wrap justify-between items-center">
  <div>
  <h3 className="text-xl font-semibold mb-2 text-orange-500">Client: {project.client.name}</h3>
  <p className="text-gray-600 flex items-center mb-1">
  <Mail className="mr-2 w-4 h-4 text-orange-500" /> {project.client.contact.email}
  </p>
  <p className="text-gray-600 flex items-center">
  <Phone className="mr-2 w-4 h-4 text-orange-500" /> {project.client.contact.phone}
  </p>
  </div>
  <div className="mt-4 md:mt-0 bg-orange-50 p-4 rounded-lg italic flex-grow md:ml-4 max-w-md">
  <p className="text-gray-700 mb-2">&quot;{project.testimonial.text}&quot;</p>
  <p className="text-gray-600 text-right">- {project.testimonial.author}</p>
  </div>
  </div>
  </motion.div>
);

const OurWork: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-purple-50 min-h-screen py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h1 
    className="text-5xl font-bold mb-16 text-center text-orange-500"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    Our Work
    </motion.h1>
    {projects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
    </div>
    </div>
  );
};

export default OurWork;
