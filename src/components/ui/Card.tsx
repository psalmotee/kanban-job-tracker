import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
