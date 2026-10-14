import type { Metadata } from "next";
import ClientPortal from "@/components/client/ClientPortal";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";

export const metadata: Metadata = {
  title: "Client portal",
  description: "Sign in to follow the progress of your Zelisline project.",
};

export default function ClientPage() {
  return (
    <Container className="py-20 sm:py-28">
      <header className="border-t-2 border-ink pt-6">
        <Eyebrow>Client portal</Eyebrow>
        <h1 className="display-wide mt-6 font-display text-[2.1rem] font-bold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl">
          Track your project
        </h1>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-muted">
          Sign in with the email we have on file to follow progress and share feedback.
        </p>
      </header>

      <div className="mt-12">
        <ClientPortal />
      </div>
    </Container>
  );
}
