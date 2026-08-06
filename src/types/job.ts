import { JOB_STATUS } from "@/constants";

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  createdAt: number;
}

export interface Column {
  id: JobStatus;
  title: string;
}
