import { DndContext, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";

import { BOARD_COLUMNS } from "@/constants";
import { groupJobsByStatus } from "@/lib";

import type { Job } from "@/types";

import { BoardColumn } from "./BoardColumn";

interface BoardProps {
  jobs: Job[];
}

export function Board({ jobs }: BoardProps) {
  const groupedJobs = groupJobsByStatus(jobs);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd() {
    console.log("Dropped");
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
