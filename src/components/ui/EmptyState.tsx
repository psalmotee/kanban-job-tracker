import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 text-center">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-200">
        <Inbox className="h-5 w-5" aria-hidden="true" />
      </div>

      <p className="text-sm font-medium text-slate-600">{title}</p>

      {description && (
        <p className="mt-1 max-w-48 text-xs leading-5 text-slate-400">{description}</p>
      )}
    </div>
  );
}
