import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { Card } from "@/components/ui";
import { formatRelativeDate } from "@/lib";

import type { Job } from "@/types";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { CSSProperties } from "react";

interface JobCardProps {
  job: Job;
}

/**
 * Displays a single job application.
 */
export function JobCard({ job }: JobCardProps) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
    data: {
      jobId: job.id,
      currentStatus: job.status,
    },
  });

  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab space-y-4 p-4 active:cursor-grabbing"
    >
      <div className="flex items-start gap-3">
        <BriefcaseBusiness className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />

        <div>
          <h3 className="font-semibold text-slate-900">{job.position}</h3>

          <p className="text-sm text-slate-500">{job.company}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-400">
        <CalendarDays className="h-4 w-4" />

        <span>{formatRelativeDate(job.createdAt)}</span>
      </div>
    </Card>
  );
}
