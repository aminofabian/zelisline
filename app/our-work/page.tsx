'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  Target,
  Users,
} from 'lucide-react';
import ClientSideNav from '@/components/ClientSideNav';
import FooterRev from '@/components/FooterRev';
import CtaBand from '@/components/CtaBand';
import Capabilities from '@/components/Capabilities';

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

const heroFacts = [
  { k: 'Projects', v: '07' },
  { k: 'Disciplines', v: 'Web · Product · Payments' },
  { k: 'Studio', v: 'Nairobi, Kenya' },
  { k: 'Shipped to', v: 'Kenya · UK · US' },
];

const Fact: React.FC<{ icon: React.ElementType; label: string; value: string }> = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
    <div>
      <dt className="text-xs uppercase tracking-[0.1em] text-ink-muted">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-ink">{value}</dd>
    </div>
  </div>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="border border-sand-200 bg-sand-50 px-3 py-1 text-xs font-medium text-ink-soft">
    {children}
  </span>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{children}</div>
);

const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const flip = index % 2 === 1;

  return (
    <motion.article
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-24 py-14 sm:py-20 ${index > 0 ? 'border-t border-sand-200' : ''}`}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Visual */}
        <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <div className="border border-sand-200 bg-sand-50 p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium text-orange-700 transition-colors hover:text-orange-800"
              >
                View project
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
            {project.client && (
              <span className="text-ink-muted">Client · {project.client.name}</span>
            )}
          </div>
        </div>

        {/* Detail */}
        <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <span className="font-display text-xs text-ink-muted">
              {String(project.id).padStart(2, '0')}
            </span>
            <h2 className="font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
              {project.title}
            </h2>
            {project.tag && (
              <span className="border border-orange-200 bg-orange-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-orange-700">
                {project.tag}
              </span>
            )}
          </div>

          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-soft">
            {project.description}
          </p>

          {(project.duration || project.teamSize || project.keyObjectives) && (
            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-sand-200 pt-6 sm:grid-cols-2">
              {project.duration && <Fact icon={Calendar} label="Duration" value={project.duration} />}
              {project.teamSize && <Fact icon={Users} label="Team" value={project.teamSize} />}
              {project.keyObjectives && <Fact icon={Target} label="Key objectives" value={project.keyObjectives} />}
            </dl>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8 border-t border-sand-200 pt-6">
              <SectionLabel>Tech stack</SectionLabel>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.otherDetails && (
            <div className="mt-8 border-t border-sand-200 pt-6">
              <SectionLabel>Outcome</SectionLabel>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{project.otherDetails}</p>
            </div>
          )}

          {project.testimonial && (
            <blockquote className="mt-8 border-l-2 border-orange-300 pl-5">
              <p className="text-pretty italic leading-relaxed text-ink-soft">
                &ldquo;{project.testimonial.text}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-ink-muted">— {project.testimonial.author}</footer>
            </blockquote>
          )}

          {project.client && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-sand-200 pt-6 text-sm text-ink-soft">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-orange-600" /> {project.client.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-orange-600" /> {project.client.contact.phone}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

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
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-sand-200 bg-sand-50">
              <div className="pointer-events-none absolute inset-0 grid-motif mask-fade-b opacity-70" aria-hidden />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] [background:radial-gradient(circle_at_center,rgba(254,215,170,0.5),transparent_70%)]"
                aria-hidden
              />

              <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-orange-500" />
                    <span className="eyebrow">Selected work</span>
                  </div>

                  <h1 className="mt-5 max-w-[18ch] font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
                    Our Work
                  </h1>

                  <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                    Products, platforms and payment rails we&apos;ve designed, built and shipped — from a
                    digital shopfront for Kenyan traders to community platforms and content engines for
                    teams across three continents.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 bg-orange-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-700"
                    >
                      Start a project
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="#index"
                      className="group inline-flex items-center justify-center gap-2 border border-sand-300 bg-white/60 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/30 hover:bg-white"
                    >
                      Browse the work
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>

                <motion.dl
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand-200 pt-8 sm:grid-cols-4"
                >
                  {heroFacts.map((fact) => (
                    <div key={fact.k}>
                      <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">{fact.k}</dt>
                      <dd className="mt-1.5 font-display text-lg text-ink">{fact.v}</dd>
                    </div>
                  ))}
                </motion.dl>
              </div>
            </section>

            {/* Index */}
            <section id="index" className="scroll-mt-24 border-b border-sand-200 bg-background">
              <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 sm:py-16 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="eyebrow">On this page</span>
                    <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-soft">
                      Jump straight to a project, or read through from the top.
                    </p>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="border-t border-sand-200">
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          href={`#project-${project.id}`}
                          className="group flex items-baseline gap-4 border-b border-sand-200 py-3.5 transition-colors hover:border-ink/30"
                        >
                          <span className="font-display text-xs text-ink-muted">
                            {String(project.id).padStart(2, '0')}
                          </span>
                          <span className="flex-1 font-display text-base text-ink transition-colors group-hover:text-orange-700 sm:text-lg">
                            {project.title}
                          </span>
                          {project.tag && (
                            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-orange-700">
                              {project.tag}
                            </span>
                          )}
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
              {projects.map((project, index) => (
                <ProjectRow key={project.id} project={project} index={index} />
              ))}
            </section>

            {/* Capabilities */}
            <Capabilities />

            {/* Closing CTA */}
            <div className="py-16 sm:py-20">
              <CtaBand />
            </div>
          </main>
        </div>

        <FooterRev />
      </div>
    </div>
  );
};

export default OurWork;
