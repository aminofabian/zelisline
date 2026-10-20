import type { Metadata } from "next";
import PackageLandingPage from "@/components/landing/PackageLandingPage";
import { smallBusinessPackage } from "@/data/landingPackages";

export const metadata: Metadata = {
  title: "Small business package",
  description: "A professional, templated website for small businesses, with a 30-day money-back guarantee.",
};

export default function SmallBusinessPackagePage() {
  return <PackageLandingPage config={smallBusinessPackage} />;
}
