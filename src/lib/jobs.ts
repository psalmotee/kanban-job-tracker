import { BOARD_COLUMNS } from "@/constants";
import type { BoardColumn, Job } from "@/types";

/**
 * Groups jobs by status in a single pass.
 */
export function groupJobsByStatus(jobs: Job[]) {
  const grouped = BOARD_COLUMNS.reduce<Record<BoardColumn["id"], Job[]>>(
    (acc, column) => {
      acc[column.id] = [];
      return acc;
    },
    {} as Record<BoardColumn["id"], Job[]>,
  );

  for (const job of jobs) {
    grouped[job.status].push(job);
  }

  return grouped;
}
