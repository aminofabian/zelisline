import type { ReactNode } from "react";
import { X } from "lucide-react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export default function FormField({ label, htmlFor, required = false, error, children }: FormFieldProps) {
  const errorId = `${htmlFor}-error`;

  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="mb-2 font-mono text-[12px] uppercase tracking-[0.1em] text-ink">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-2 flex items-center gap-2 text-sm font-medium text-ink">
          <X className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
