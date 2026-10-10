import type { Metadata } from "next";
import PackageLandingPage from "@/components/landing/PackageLandingPage";
import { personalWebsitePackage } from "@/data/landingPackages";

export const metadata: Metadata = {
  title: "Personal website package",
  description: "A custom, SEO-ready personal website launched in 7 days, with a 30-day money-back guarantee.",
};

export default function PersonalWebsitePackagePage() {
  return <PackageLandingPage config={personalWebsitePackage} />;
}
