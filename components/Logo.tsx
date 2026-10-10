import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  inverted?: boolean;
  priority?: boolean;
}

export default function Logo({ className = "h-8", inverted = false, priority = false }: LogoProps) {
  return (
    <Image
      src="/zelisline-logo.png"
      width={600}
      height={160}
      alt="Zelisline — grow together"
      priority={priority}
      className={cn("w-auto", className, inverted && "invert-logo")}
    />
  );
}
