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

export function moveJob(jobs: Job[], jobId: string, newStatus: string) {
  return jobs.map((job) => {
    if (job.id === jobId) {
      return { ...job, status: newStatus };
    }
    return job;
  });
}