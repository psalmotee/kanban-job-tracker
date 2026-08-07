import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

import { Badge, EmptyState } from "@/components/ui";
import { JOB_STATUS } from "@/constants";

import type { BoardColumn as BoardColumnType, Job } from "@/types";

import { JobCard } from "./JobCard";

interface BoardColumnProps {
  column: BoardColumnType;
  jobs: Job[];
  onDelete: (jobId: string) => void;
}

const statusStyles = {
  [JOB_STATUS.APPLIED]: {
    dot: "bg-blue-500",
    badge: "blue",
  },
  [JOB_STATUS.INTERVIEWING]: {
    dot: "bg-amber-500",
    badge: "amber",
  },
  [JOB_STATUS.OFFER]: {
    dot: "bg-emerald-500",
    badge: "green",
  },
  [JOB_STATUS.REJECTED]: {
    dot: "bg-red-500",
    badge: "red",
  },
} as const;

export function BoardColumn({ column, jobs, onDelete }: BoardColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: {
      type: "column",
      status: column.id,
    },
  });

  const styles = statusStyles[column.id];

  return (
    <section
      ref={setNodeRef}
      className={`flex min-h-80 flex-col rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 ${
        isOver ? "border-blue-300 bg-blue-50/50 shadow-md ring-2 ring-blue-100" : "border-slate-200"
      } `}
    >
      <header className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} aria-hidden="true" />

          <h2 className="text-sm font-semibold text-slate-800">{column.title}</h2>
        </div>

        <Badge variant={styles.badge}>{jobs.length}</Badge>
      </header>

      <SortableContext items={jobs.map((job) => job.id)} strategy={verticalListSortingStrategy}>
        <div className="min-h-52 flex-1 space-y-3">
          {jobs.length === 0 ? (
            <EmptyState title="No jobs yet" description="Drag a job here or add a new one." />
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} onDelete={onDelete} />)
          )}
        </div>
      </SortableContext>
    </section>
  );
}
