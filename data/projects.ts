import type { ProjectTestimonial } from "@/types/content";

export interface ProjectClient {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  duration?: string;
  techStack?: string[];
  outcome?: string;
  link?: string;
  tag?: string;
  client?: ProjectClient;
  teamSize?: string;
  keyObjectives?: string;
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "kiosk.ke – The Digital Shopfront",
    image: "/kiosk.svg",
    description:
      "kiosk.ke brings the everyday corner shop online. A mobile-first storefront that lets small traders showcase their products, take orders, and reach customers well beyond their street corner — the kiosk energy of Kenyan commerce, reimagined for the web.",
    link: "https://kiosk.ke",
    tag: "New",
  },
  {
    id: 2,
    title: "squl.co.ke – School, Sorted",
    image: "/squl.svg",
    description:
      "Our education platform. squl.co.ke connects administrators, teachers, parents, and learners in one place — bringing admissions, records, and everyday school communication together so nothing gets lost in the paperwork.",
    link: "https://squl.co.ke",
    tag: "New",
  },
  {
    id: 3,
    title: "kioskpay.co.ke – Payments for Small Business",
    image: "/kioskpay.svg",
    description:
      "The payments layer of the kiosk story. kioskpay.co.ke is merchant-first payment tooling built to make collections, payouts, and reconciliation effortless — conceived as an M-Pesa-first rail for small business in Kenya.",
    link: "https://kioskpay.co.ke",
    tag: "New",
  },
  {
    id: 4,
    title: "Alexawriters — Premium Article Writing Platform",
    image: "/alexawriters.png",
    description:
      "AlexaWriters is a premium article writing platform built with Next.js, featuring a client dashboard for placing orders, a writer dashboard for managing tasks, and an admin dashboard for overseeing operations. It integrates AI tools for generating content ideas, managing writers, and optimizing order fulfillment, designed for seamless efficiency.",
    duration: "2 months",
    techStack: ["Next.js", "Node.js", "MongoDB", "AWS"],
    outcome: "Built with Next.js and AI for Idea Generation and Writer Management",
    link: "https://alexawriters.com",
    client: { name: "AlexaWriters Inc." },
    teamSize: "2 developers, 1 designer",
    keyObjectives: "Enhance UX, Streamline Operations, Automate Writer Management",
    testimonial: {
      text: "AlexaWriters transformed how we manage content, automating workflows and improving efficiency. Their integration of AI made a huge difference.",
      author: "Dolphine Peace, CEO of AlexaWriters Inc.",
    },
  },
  {
    id: 5,
    title: "Fitrii — Community Support Platform",
    image: "/fitrii.png",
    description:
      "FItrii is a platform where people join support communities to help each other. It features integrated payment systems and is designed for easy community building and mutual assistance.",
    duration: "3 months",
    techStack: ["NextJS", "React", "Zustand", "PostgreSQL"],
    outcome: "Mobile app for Android and iOS in development using React Native",
    link: "https://fitrii.com",
    client: { name: "FItrii Inc." },
    teamSize: "3 developers, 2 designer",
    keyObjectives: "Build Support Communities, Facilitate Mutual Aid, Enable Easy Payments",
    testimonial: {
      text: "FItrii has revolutionized how we connect people in need with those who can help. The platform's ease of use and payment integrations make it incredibly effective.",
      author: "Mike Nester, Founder of FItrii Inc.",
    },
  },
  {
    id: 6,
    title: "Mediamasses — Social Media Following Marketplace",
    image: "/mediamassess.png",
    description:
      "Mediamasses is a platform that sells social media following across various platforms including YouTube and Instagram. It integrates third-party APIs for service processing and Kopokopo APIs for M-Pesa payments.",
    duration: "2 weeks",
    techStack: ["Next.js", "Nest.js"],
    outcome: "Integrated with third-party APIs for service processing and Kopokopo for M-Pesa payments",
    link: "https://mediamasses.com",
    client: { name: "Mediamasses Inc." },
    teamSize: "2 developers, 1 designer",
    keyObjectives: "Sell Social Media Following, Process Services via APIs, Enable M-Pesa Payments",
    testimonial: {
      text: "Mediamasses has streamlined our social media growth services. The integration with various platforms and M-Pesa payments has significantly improved our operations.",
      author: "Xtian Dela, CEO of Mediamasses Inc.",
    },
  },
  {
    id: 7,
    title: "Pulse Labs — Innovative UX Research Platform",
    image: "/pulselabs.png",
    description:
      "Pulse Labs is at the forefront of revolutionizing user experience research and analytics. Our proprietary technology captures real-time, context-rich user interactions in a privacy-conscious manner, providing human-centered insights since 2017.",
    duration: "2 months",
    techStack: ["React", "React Query", "Duda CMS"],
    outcome: "Proprietary technology for capturing real-time user interactions",
    link: "https://pulselabs.ai",
    client: { name: "Pulse Labs" },
    teamSize: "4 developers, 2 designers",
    keyObjectives: "Revolutionize UX Research, Provide Real-time Analytics, Ensure Privacy",
    testimonial: {
      text: "Pulse Labs has transformed our approach to user experience research. Their innovative technology provides us with insights we never thought possible, all while maintaining user privacy.",
      author: "Dr. Emily Chen, Head of UX Research at TechGiant Corp.",
    },
  },
];
