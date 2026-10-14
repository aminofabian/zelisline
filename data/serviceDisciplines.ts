import type { ServiceDiscipline } from "@/types/content";
import webDesignAnimation from "@/components/Animation.json";
import graphicalAnimation from "@/components/Animation1.json";
import marketingAnimation from "@/components/Animation2.json";

export const webDesignDiscipline: ServiceDiscipline = {
  id: "web-design",
  tabLabel: "Web & product",
  kicker: "Design & build",
  title: "Websites & applications",
  lead: "From a focused marketing site to a full product, we design and engineer interfaces that are fast, accessible and genuinely pleasant to use.",
  animation: webDesignAnimation,
  items: [
    { name: "Mobile app design", description: "Intuitive, considered interfaces for iOS and Android." },
    { name: "Customisation", description: "Tailoring the build to fit the way your team actually works." },
    { name: "Frontend development", description: "Responsive, accessible, interactive front ends." },
    { name: "WordPress", description: "Flexible, easy-to-manage sites on a familiar platform." },
    { name: "Headless WordPress", description: "Decoupled architecture for speed and editorial freedom." },
    { name: "Custom themes", description: "Bespoke themes designed around your brand." },
    { name: "SaaS platforms", description: "Scalable, cloud-based products built for growth." },
  ],
};

export const digitalMarketingDiscipline: ServiceDiscipline = {
  id: "digital-marketing",
  tabLabel: "Growth & SEO",
  kicker: "Growth",
  title: "Digital marketing & SEO",
  lead: "Strategy, content and campaigns that put your business in front of the right people — and turn attention into enquiries.",
  animation: marketingAnimation,
  items: [
    { name: "SEO", description: "Earn visibility in the searches that matter to you." },
    { name: "Social media", description: "Build an audience and keep it engaged." },
    { name: "Paid advertising", description: "Targeted campaigns with measurable returns." },
    { name: "Content marketing", description: "Writing and resources that attract and retain customers." },
    { name: "Email marketing", description: "Campaigns that nurture relationships over time." },
  ],
};

export const graphicalDesignDiscipline: ServiceDiscipline = {
  id: "graphical-design",
  tabLabel: "Brand & design",
  kicker: "Brand",
  title: "Graphic & brand design",
  lead: "Visual identity work that gives your business a consistent, confident presence across every surface it touches.",
  animation: graphicalAnimation,
  items: [
    { name: "Logo design", description: "Distinct, memorable marks for your brand." },
    { name: "Poster design", description: "Eye-catching collateral for events and campaigns." },
    { name: "Cutting & editing", description: "Precise retouching for a polished finish." },
    { name: "Layout design", description: "Clear, well-structured print and screen layouts." },
    { name: "Digital illustration", description: "Original artwork that sets you apart." },
  ],
};

export const customStackDiscipline: ServiceDiscipline = {
  id: "custom-stack",
  tabLabel: "Custom stack",
  kicker: "Engineering",
  title: "Custom web development",
  lead: "The tools we reach for when a project needs more than a template: modern front ends, solid back ends and integrations that hold up under load.",
  animation: graphicalAnimation,
  items: [
    { name: "HTML", description: "Crafted with semantic markup for a solid foundation and SEO-friendly structure." },
    { name: "CSS", description: "Stylish designs and layouts tailored to your brand's aesthetics and responsiveness." },
    { name: "JavaScript", description: "Rapid development with mobile-first, customizable components for a sleek UI." },
    { name: "NodeJS", description: "Scalable backend solutions and API integrations for robust web applications." },
    { name: "NestJs", description: "Structured, testable server applications for scalable and secure products." },
    { name: "React", description: "Building powerful, scalable, and reusable components for dynamic web applications." },
    { name: "NextJs", description: "Server-side rendering and seamless client-side navigation for blazing-fast performance." },
    { name: "Redux", description: "State management for complex data flows and predictable application behavior." },
    { name: "Payment Integration", description: "Payment gateways and checkout flows wired into your site." },
    { name: "Django", description: "Python-based backends for data-heavy and admin-heavy applications." },
  ],
};
