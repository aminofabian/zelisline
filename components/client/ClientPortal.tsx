"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import Action from "@/components/system/Action";
import FormField from "@/components/forms/FormField";
import { INPUT_CLASSES } from "@/components/forms/inputStyles";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

type PortalStep = "phone" | "otp" | "dashboard";
type ProjectStatus = "planning" | "in-progress" | "review" | "completed";

interface PortalProject {
  id: string;
  status: ProjectStatus;
  title: string;
  description: string;
  progress: number;
  lastUpdate: string;
}

const OTP_LENGTH = 4;
const SIMULATED_DELAY_MS = 1500;
const TOAST_DURATION_MS = 5000;
const PANEL_TRANSITION_S = 0.3;
const PROGRESS_TRANSITION_S = 1;

const INITIAL_PROJECTS: PortalProject[] = [
  {
    id: "1",
    status: "in-progress",
    title: "Website Development",
    description: "Modern responsive website with Next.js",
    progress: 65,
    lastUpdate: "2 hours ago",
  },
  {
    id: "2",
    status: "planning",
    title: "Digital Marketing Campaign",
    description: "Social media and SEO optimization",
    progress: 25,
    lastUpdate: "1 day ago",
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function PanelShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: PANEL_TRANSITION_S }}
      className="border border-ink bg-paper p-6 sm:p-10"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">Client portal</p>
      <h2 className="display-wide mt-4 font-display text-3xl font-bold leading-tight">{title}</h2>
      <p className="mt-3 text-ink-muted">{description}</p>
      <div className="mt-8">{children}</div>
    </motion.div>
  );
}

function PhoneStep({ phone, isLoading, onPhoneChange, onSubmit }: {
  phone: string;
  isLoading: boolean;
  onPhoneChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}) {
  return (
    <PanelShell title="Client login" description="Enter your phone number to get started">
      <form onSubmit={onSubmit} className="space-y-6">
        <FormField label="Phone number" htmlFor="portal-phone" required>
          <input
            id="portal-phone"
            type="tel"
            value={phone}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onPhoneChange(event.target.value)}
            placeholder="+254 XXX XXX XXX"
            autoComplete="tel"
            required
            className={INPUT_CLASSES}
          />
        </FormField>
        <Action type="submit" disabled={isLoading} arrow={!isLoading} className="w-full">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-label="Sending code" /> : "Continue"}
        </Action>
      </form>
    </PanelShell>
  );
}

function OtpStep({ phone, otp, isLoading, onDigitChange, onSubmit }: {
  phone: string;
  otp: string[];
  isLoading: boolean;
  onDigitChange: (index: number, value: string) => void;
  onSubmit: (event: FormEvent) => void;
}) {
  return (
    <PanelShell title="Verify code" description={`Enter the code sent to ${phone}`}>
      <form onSubmit={onSubmit} className="space-y-6">
        <fieldset>
          <legend className="sr-only">Verification code</legend>
          <div className="grid grid-cols-4 gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                aria-label={`Digit ${index + 1}`}
                onChange={(event) => onDigitChange(index, event.target.value)}
                className={cn(INPUT_CLASSES, "h-14 px-0 text-center font-display text-2xl font-bold")}
              />
            ))}
          </div>
        </fieldset>
        <Action type="submit" disabled={isLoading} arrow={!isLoading} className="w-full">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-label="Verifying" /> : "Verify"}
        </Action>
      </form>
    </PanelShell>
  );
}

function ProjectCard({ project }: { project: PortalProject }) {
  return (
    <article className="border border-ink p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="display-wide font-display text-lg font-bold">{project.title}</h3>
        <span className="border border-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">{project.status}</span>
      </div>
      <p className="mt-2 text-sm text-ink-muted">{project.description}</p>

      <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em]">
        <span>{project.progress}% complete</span>
        <span className="text-ink-muted">Updated {project.lastUpdate}</span>
      </div>
      <div className="mt-2 h-2 w-full bg-grey-100" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${project.progress}%` }}
          transition={{ duration: PROGRESS_TRANSITION_S, ease: "easeOut" }}
          className="h-full bg-ink"
        />
      </div>
    </article>
  );
}

function DashboardStep({ projects }: { projects: PortalProject[] }) {
  return (
    <PanelShell title="Your projects" description="Track your project progress">
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PanelShell>
  );
}

export default function ClientPortal() {
  const { toast } = useToast();
  const [step, setStep] = useState<PortalStep>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [projects] = useState<PortalProject[]>(INITIAL_PROJECTS);

  const handleSendCode = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await wait(SIMULATED_DELAY_MS);
    setIsLoading(false);
    toast({ title: "Code sent", description: "Please check your phone for the verification code.", duration: TOAST_DURATION_MS });
    setStep("otp");
  };

  const handleVerify = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await wait(SIMULATED_DELAY_MS);
    setIsLoading(false);
    toast({ title: "Verified", description: "Successfully verified. Opening your dashboard.", duration: TOAST_DURATION_MS });
    setStep("dashboard");
  };

  const handleDigitChange = (index: number, value: string) => {
    if (value.length > 1) return;
    setOtp((previous) => previous.map((digit, position) => (position === index ? value : digit)));
    if (value !== "" && index < OTP_LENGTH - 1) document.getElementById(`otp-${index + 1}`)?.focus();
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <AnimatePresence mode="wait">
        {step === "phone" && (
          <PhoneStep key="phone" phone={phone} isLoading={isLoading} onPhoneChange={setPhone} onSubmit={handleSendCode} />
        )}
        {step === "otp" && (
          <OtpStep key="otp" phone={phone} otp={otp} isLoading={isLoading} onDigitChange={handleDigitChange} onSubmit={handleVerify} />
        )}
        {step === "dashboard" && <DashboardStep key="dashboard" projects={projects} />}
      </AnimatePresence>
    </div>
  );
}
