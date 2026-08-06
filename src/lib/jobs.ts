import { BOARD_COLUMNS, type JobStatus } from "@/constants";
import type { BoardColumn, Job, } from "@/types";

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
    console.log(job.status);
    grouped[job.status].push(job);
  }

  return grouped;
}

export function moveJob(jobs: Job[], jobId: string, newStatus: JobStatus): Job[] {
  return jobs.map((job) => (job.id === jobId ? { ...job, status: newStatus } : job));
}