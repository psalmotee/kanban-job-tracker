import { DndContext, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";

import { BOARD_COLUMNS, type JobStatus } from "@/constants";
import { groupJobsByStatus } from "@/lib";

import type { DragEndEvent } from "@dnd-kit/core";
import type { Job} from "@/types";

import { BoardColumn } from "./BoardColumn";

interface BoardProps {
  jobs: Job[];
    moveJob: (jobId: string, status: JobStatus) => void;
}

export function Board({ jobs, moveJob }: BoardProps) {
  const groupedJobs = groupJobsByStatus(jobs);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const jobId = String(active.id);
    const newStatus = String(over.id) as JobStatus;

    moveJob(jobId, newStatus);
  }
  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid gap-6 lg:grid-cols-4">
        {BOARD_COLUMNS.map((column) => (
          <BoardColumn key={column.id} column={column} jobs={groupedJobs[column.id]} />
        ))}
      </div>
    </DndContext>
  );
}
