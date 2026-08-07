import type { MouseEvent } from "react";

import { BriefcaseBusiness, CalendarDays, Trash2 } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Card } from "@/components/ui";
import { formatRelativeDate } from "@/lib";

import type { Job } from "@/types";

interface JobCardProps {
  job: Job;
  onDelete: (jobId: string) => void;
}

export function JobCard({ job, onDelete }: JobCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: job.id,
    data: {
      type: "job",
      job,
    },
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
      className={`group cursor-grab touch-none border-slate-200 bg-white p-4 transition-all duration-200 select-none hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md active:cursor-grabbing ${
        isDragging ? "z-10 cursor-grabbing opacity-60 shadow-xl" : ""
      } `}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-slate-900">{job.position}</h3>

            <p className="mt-0.5 truncate text-sm text-slate-500">{job.company}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          onPointerDown={(event) => event.stopPropagation()}
          className="shrink-0 cursor-pointer rounded-md p-1.5 text-slate-300 opacity-0 transition-all group-hover:opacity-100 hover:bg-red-50 hover:text-red-600 focus:opacity-100 focus:ring-2 focus:ring-red-400 focus:outline-none"
          aria-label={`Delete ${job.position} at ${job.company}`}
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-400">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />

        <span>{formatRelativeDate(job.createdAt)}</span>
      </div>
    </Card>
  );
}
