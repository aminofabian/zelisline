'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Phone, Calendar, Users, Target } from 'lucide-react';
import ClientSideNav from '@/components/ClientSideNav';
import FooterRev from '@/components/FooterRev';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  duration?: string;
  techStack?: string[];
  otherDetails?: string;
  link?: string;
  tag?: string;
  client?: {
    name: string;
    contact: {
      email: string;
      phone: string;
    };
  };
  teamSize?: string;
  keyObjectives?: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "kiosk.ke – The Digital Shopfront",
    image: "/kiosk.svg",
    description: "kiosk.ke brings the everyday corner shop online. A mobile-first storefront that lets small traders showcase their products, take orders, and reach customers well beyond their street corner — the kiosk energy of Kenyan commerce, reimagined for the web.",
    tag: "New",
  },
  {
    id: 2,
    title: "squl.co.ke – School, Sorted",
    image: "/squl.svg",
    description: "Our education platform. squl.co.ke connects administrators, teachers, parents, and learners in one place — bringing admissions, records, and everyday school communication together so nothing gets lost in the paperwork.",
    tag: "New",
  },
  {
    id: 3,
    title: "kioskpay.co.ke – Payments for Small Business",
    image: "/kioskpay.svg",
    description: "The payments layer of the kiosk story. kioskpay.co.ke is merchant-first payment tooling built to make collections, payouts, and reconciliation effortless — conceived as an M-Pesa-first rail for small business in Kenya.",
    tag: "New",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

const Fact: React.FC<{ icon: React.ElementType; label: string; value: string }> = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
    <div>
      <dt className="text-xs uppercase tracking-[0.1em] text-ink-muted">{label}</dt>
      <dd className="mt-0.5 text-sm leading-relaxed text-ink">{value}</dd>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.05 }}
    className={`py-10 sm:py-14 ${index > 0 ? 'border-t border-sand-200' : ''}`}
  >
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Visual */}
      <div className="lg:col-span-4">
        <div className="border border-sand-200 bg-sand-50 p-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Detail */}
      <div className="lg:col-span-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-display text-xs text-ink-muted">{String(project.id).padStart(2, '0')}</span>
          <h2 className="font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">{project.title}</h2>
          {project.tag && (
            <span className="border border-orange-200 bg-orange-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-orange-700">
              {project.tag}
            </span>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-soft">{project.description}</p>

        {(project.duration || project.teamSize || project.keyObjectives) && (
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {project.duration && <Fact icon={Calendar} label="Duration" value={project.duration} />}
            {project.teamSize && <Fact icon={Users} label="Team" value={project.teamSize} />}
            {project.keyObjectives && <Fact icon={Target} label="Key objectives" value={project.keyObjectives} />}
          </dl>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-ink-soft">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Tech stack</span>
            <span>{project.techStack.join(' · ')}</span>
          </p>
        )}

        {project.otherDetails && (
          <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-ink-soft">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Result</span>
            <span>{project.otherDetails}</span>
          </p>
        )}

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-orange-700 transition-colors hover:text-orange-800"
          >
            View project
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}

        {(project.client || project.testimonial) && (
          <div className="mt-8 grid gap-6 border-t border-sand-200 pt-6 sm:grid-cols-2">
            {project.client && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Client</div>
                <div className="mt-2 font-display text-lg text-ink">{project.client.name}</div>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                  <Mail className="h-4 w-4 shrink-0 text-orange-600" /> {project.client.contact.email}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-ink-soft">
                  <Phone className="h-4 w-4 shrink-0 text-orange-600" /> {project.client.contact.phone}
                </p>
              </div>
            )}
            {project.testimonial && (
              <blockquote className="border-l-2 border-orange-300 pl-5">
                <p className="text-pretty italic leading-relaxed text-ink-soft">&quot;{project.testimonial.text}&quot;</p>
                <footer className="mt-3 text-sm text-ink-muted">— {project.testimonial.author}</footer>
              </blockquote>
            )}
          </div>
        )}
      </div>
    </div>
  </motion.article>
);

const OurWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Squared surfaces, matching the homepage. */}
      <div className="edges-square">
        <div className="flex items-start">
          {/* Desktop rail — small screens use the layout-level MobileNav */}
          <div className="hidden shrink-0 pl-4 pr-2 pt-6 sm:pl-6 md:block md:self-stretch lg:pl-10">
            <ClientSideNav />
          </div>

          <main className="min-w-0 flex-1">
            {/* Header band */}
            <section className="border-b border-sand-200 bg-sand-50">
              <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-12 sm:px-6 md:pt-16 lg:px-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-500" />
                  <span className="eyebrow">Selected work</span>
                </div>
                <h1 className="mt-5 max-w-[20ch] font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
                  Our Work
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  From storefront (<span className="font-medium text-orange-700">kiosk.ke</span>) to
                  operations (<span className="font-medium text-orange-700">squl.co.ke</span>) to
                  payments (<span className="font-medium text-orange-700">kioskpay.co.ke</span>) — and
                  everything in between — here&apos;s what we&apos;ve been building.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </section>
          </main>
        </div>

        <FooterRev />
      </div>
    </div>
  );
};

export default OurWork;
