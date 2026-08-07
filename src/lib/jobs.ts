import { BOARD_COLUMNS, type JobStatus } from "@/constants";
import type { BoardColumn, Job } from "@/types";

export function groupJobsByStatus(jobs: Job[]): Record<BoardColumn["id"], Job[]> {
  const grouped = BOARD_COLUMNS.reduce<Record<BoardColumn["id"], Job[]>>(
    (accumulator, column) => {
      accumulator[column.id] = [];
      return accumulator;
    },
    {} as Record<BoardColumn["id"], Job[]>,
  );

  for (const job of jobs) {
    if (job.status in grouped) {
      grouped[job.status].push(job);
    }
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
