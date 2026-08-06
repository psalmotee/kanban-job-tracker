import { BOARD_COLUMNS, type JobStatus } from "@/constants";
import type { BoardColumn, Job } from "@/types";

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

export function moveJob(jobs: Job[], jobId: string, newStatus: JobStatus): Job[] {
  return jobs.map((job) => (job.id === jobId ? { ...job, status: newStatus } : job));
}

export function addJob(jobs: Job[], job: Job): Job[] {
  return [job, ...jobs];
}

export function deleteJob(jobs: Job[], jobId: string): Job[] {
  return jobs.filter((job) => job.id !== jobId);
}
