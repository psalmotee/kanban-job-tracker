import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm",
        "placeholder:text-slate-400",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
