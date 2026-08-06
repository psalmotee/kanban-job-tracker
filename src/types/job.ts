import type { JobStatus } from "@/constants";

export interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  createdAt: number;
}

export interface BoardColumn {
  id: JobStatus;
  title: string;
  description?: string;
}