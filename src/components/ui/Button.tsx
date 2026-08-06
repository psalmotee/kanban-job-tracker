import { cn } from "@/lib";

import type { ButtonProps } from "./Button.types";

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-slate-300 bg-white hover:bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
