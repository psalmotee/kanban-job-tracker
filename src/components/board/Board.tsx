import { DndContext, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";

import type { DragEndEvent } from "@dnd-kit/core";

import { BOARD_COLUMNS, type JobStatus } from "@/constants";
import { groupJobsByStatus } from "@/lib";

import type { Job } from "@/types";

import { BoardColumn } from "./BoardColumn";

interface BoardProps {
  jobs: Job[];
  moveJob: (jobId: string, status: JobStatus) => void;
  onDelete: (jobId: string) => void;
}

export function Board({ jobs, moveJob, onDelete }: BoardProps) {
  const groupedJobs = groupJobsByStatus(jobs);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const jobId = String(active.id);

    const overType = over.data.current?.type;

    let newStatus: JobStatus | undefined;

    if (overType === "column") {
      newStatus = over.data.current?.status as JobStatus;
    }

    if (overType === "job") {
      newStatus = over.data.current?.job?.status as JobStatus;
    }

    if (!newStatus) {
      return;
    }

    moveJob(jobId, newStatus);
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid gap-6 lg:grid-cols-4">
        {BOARD_COLUMNS.map((column) => (
          <BoardColumn
            key={column.id}
            column={column}
            jobs={groupedJobs[column.id]}
            onDelete={onDelete}
          />
        ))}
      </div>
    </DndContext>
  );
}
