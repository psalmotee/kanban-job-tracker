import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-8 text-center">
      <Inbox className="mb-3 h-10 w-10 text-slate-400" aria-hidden="true" />

      <h3 className="text-base font-semibold text-slate-800">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
