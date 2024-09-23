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
    title: "AlexaWriters – Premium Article Writing Platform",
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
      author: "Sarah Johnson, CEO of AlexaWriters Inc."
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
  <Link href={project.link} className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200">
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