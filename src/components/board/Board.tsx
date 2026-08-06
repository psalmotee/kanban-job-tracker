import { BOARD_COLUMNS } from "@/constants";
import { groupJobsByStatus } from "@/lib";

import type { Job } from "@/types";

import { BoardColumn } from "./BoardColumn";

interface BoardProps {
  jobs: Job[];
}

/**
 * Renders the Kanban board.
 */
export function Board({ jobs }: BoardProps) {
  const groupedJobs = groupJobsByStatus(jobs);

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {BOARD_COLUMNS.map((column) => (
        <BoardColumn key={column.id} column={column} jobs={groupedJobs[column.id]} />
      ))}
    </div>
  );
}
