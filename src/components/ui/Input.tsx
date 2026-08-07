import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(
          "w-full rounded-lg border bg-white px-3.5 py-2.5",
          "text-sm text-slate-900 placeholder:text-slate-400",
          "transition-all outline-none",
          "focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
          "disabled:cursor-not-allowed disabled:bg-slate-50",
          error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-slate-200",
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
