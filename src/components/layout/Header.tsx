import { Plus } from "lucide-react";

import { Button } from "@/components/ui";

interface HeaderProps {
  onAddJob: () => void;
}

/**
 * Displays the application heading and primary action.
 */
export function Header({ onAddJob }: HeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Kanban Job Tracker</h1>

        <p className="mt-2 text-sm text-slate-500">
          Track your job applications visually and move them through each stage.
        </p>
      </div>

      <Button onClick={onAddJob} className="w-full md:w-auto">
        <Plus className="mr-2 h-4 w-4" />
        Add Job
      </Button>
    </header>
  );
}
