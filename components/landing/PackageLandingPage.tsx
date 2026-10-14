"use client";

import { useState } from "react";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";
import PackageHero from "@/components/landing/package/PackageHero";
import PackageStats from "@/components/landing/package/PackageStats";
import PackageLaunches from "@/components/landing/package/PackageLaunches";
import PackageFeatures from "@/components/landing/package/PackageFeatures";
import PackageTestimonials from "@/components/landing/package/PackageTestimonials";
import PackageFinalCta from "@/components/landing/package/PackageFinalCta";
import type { PackageLandingConfig } from "@/types/content";

interface PackageLandingPageProps {
  config: PackageLandingConfig;
}

export default function PackageLandingPage({ config }: PackageLandingPageProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <>
      <PackageHero config={config} onOpenInquiry={openInquiry} />
      {config.stats.length > 0 && <PackageStats stats={config.stats} />}
      {config.launches.length > 0 && <PackageLaunches launches={config.launches} />}
      <PackageFeatures title={config.featuresTitle} description={config.featuresDescription} features={config.features} />
      <PackageTestimonials testimonials={config.testimonials} />
      <PackageFinalCta config={config} onOpenInquiry={openInquiry} />
      <ProjectInquiryModal isOpen={isInquiryOpen} onClose={closeInquiry} />
    </>
  );
}
