'use client'

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowDown, Code, Database, GitBranch, Globe, Lock, Rocket, Users } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Fabian Amino",
    role: "Lead Software Developer",
    expertise: "Full Stack Development",
    image: "/team/fabian.jpg", // Add your photo
    icon: Code,
    description: "Experienced software developer specializing in web applications with Next.js, React, Flutter, and more.",
    github: "https://github.com/aminofabian",
    skills: ["Next.js", "React", "Flutter", "MySQL", "TypeORM", "Prisma"],
    location: "Nairobi, Kenya"
  },
  {
    name: "Tobias Baraka",
    role: "Full Stack Engineer",
    expertise: "JavaScript & Security",
    image: "/team/tobias.jpg", // Add Tobias's photo
    icon: Lock,
    description: "Security-focused full stack developer with expertise in Node.js and PostgreSQL.",
    github: "https://github.com/tobias-barakaa",
    skills: ["Node.js", "PostgreSQL", "Redis", "OAuth", "Data Encryption"],
    location: "Kenya"
  },
  {
    name: "Eugene Keya",
    role: "Software Developer",
    expertise: "Web Development",
    image: "/team/eugene.jpg", // Add Eugene's photo
    icon: Globe,
    description: "Passionate developer focused on creating innovative web solutions.",
    skills: ["JavaScript", "React", "Node.js"],
    location: "Kenya"
  },
  {
    name: "Dolphine Peace",
    role: "UI/UX Developer",
    expertise: "Frontend Development",
    image: "/team/dolphine.jpg", // Add Dolphine's photo
    icon: GitBranch,
    description: "Creative developer specializing in building beautiful user interfaces.",
    skills: ["React", "CSS", "UI/UX Design"],
    location: "Kenya"
  }
];

export const OurTeam = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A talented team of developers from Kenya, passionate about creating innovative digital solutions and delivering exceptional results for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center p-1 px-2 bg-orange-100 rounded-full">
            <Rocket className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium">Join Our Team</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented developers to join our growing team.
            If you're passionate about creating amazing digital experiences, we'd love to hear from you.
          </p>
          <Link href="/contact" className="inline-block mt-6 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium transition-colors duration-200">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute -top-4 left-6 bg-orange-600 rounded-full p-2 shadow-lg">
        <member.icon className="w-6 h-6 text-white" />
      </div>
      
      <div className="h-48 mb-4 overflow-hidden rounded-xl bg-orange-50">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-orange-600 font-medium mb-2">{member.role}</p>
      <p className="text-sm text-gray-600 mb-4">{member.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-500">
          <Users className="w-4 h-4 mr-2" />
          <span>{member.expertise}</span>
        </div>
        {member.github && (
          <a 
            href={member.github}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors"
          >
            <GitBranch className="w-4 h-4 mr-2" />
            <span>GitHub Profile</span>
          </a>
        )}
        {member.location && (
          <div className="flex items-center text-sm text-gray-500">
            <Globe className="w-4 h-4 mr-2" />
            <span>{member.location}</span>
          </div>
        )}
      </div>
      
      {member.skills && (
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.map((skill: string) => (
            <span 
              key={skill}
              className="inline-block px-2 py-1 text-xs font-medium text-orange-600 bg-orange-50 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
