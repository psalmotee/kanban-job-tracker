import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "green" | "red" | "amber";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-600",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    red: "bg-red-50 text-red-700",
    amber: "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={cn(
        "inline-flex min-w-7 items-center justify-center rounded-full px-2 py-1",
        "text-xs font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
