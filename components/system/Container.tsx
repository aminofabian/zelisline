import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
