import { BriefcaseBusiness, Plus } from "lucide-react";

import { Button } from "@/components/ui";

interface HeaderProps {
  onAddJob: () => void;
}

export function Header({ onAddJob }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Job Tracker
            </h1>

            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Track your applications and stay on top of your job search.
            </p>
          </div>
        </div>

        <Button type="button" onClick={onAddJob} className="w-full sm:w-auto">
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add Job
        </Button>
      </div>
    </header>
  );
}
