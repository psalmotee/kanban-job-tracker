import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

import { Badge, EmptyState } from "@/components/ui";

import type { BoardColumn as BoardColumnType, Job } from "@/types";

import { JobCard } from "./JobCard";

interface BoardColumnProps {
  column: BoardColumnType;
  jobs: Job[];
  onDelete: (jobId: string) => void;
}

export function BoardColumn({ column, jobs, onDelete }: BoardColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <section
      ref={setNodeRef}
      className={`rounded-xl p-4 transition-colors ${
        isOver ? "bg-blue-100 ring-2 ring-blue-400" : "bg-slate-50"
      }`}
    >
      <header className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-slate-900">{column.title}</h2>

        <Badge>{jobs.length}</Badge>
      </header>

      <SortableContext items={jobs.map((job) => job.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <EmptyState title="No jobs" description="Add one or drag a card here." />
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} onDelete={onDelete} />)
          )}
        </div>
      </SortableContext>
    </section>
  );
}
