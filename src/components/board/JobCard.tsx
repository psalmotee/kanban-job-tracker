import { BriefcaseBusiness, CalendarDays, Trash2 } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Card } from "@/components/ui";
import { formatRelativeDate } from "@/lib";

import type { Job } from "@/types";

import type { MouseEvent } from "react";

interface JobCardProps {
  job: Job;
  onDelete: (jobId: string) => void;
}

export function JobCard({ job, onDelete }: JobCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: job.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleDelete(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onDelete(job.id);
  }
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`space-y-4 p-4 ${isDragging ? "opacity-50 shadow-xl" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />

          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900">{job.position}</h3>

            <p className="text-sm text-slate-500">{job.company}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          onPointerDown={(event) => event.stopPropagation()}
          className="shrink-0 rounded-md p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
          aria-label={`Delete ${job.position} at ${job.company}`}
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-400">
        <CalendarDays className="h-4 w-4" aria-hidden="true" />

        <span>{formatRelativeDate(job.createdAt)}</span>
      </div>
    </Card>
  );
}
