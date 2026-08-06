import { JOB_STATUS } from "@/constants";
import type { Job } from "@/types";

export const initialJobs: Job[] = [
  {
    id: "1",
    company: "Spotify",
    position: "Frontend Developer",
    status: JOB_STATUS.APPLIED,
    createdAt: "2026-08-01",
  },
  {
    id: "2",
    company: "Amazon",
    position: "Software Engineer",
    status: JOB_STATUS.INTERVIEWING,
    createdAt: "2026-08-02",
  },
  {
    id: "3",
    company: "Netflix",
    position: "React Engineer",
    status: JOB_STATUS.OFFER,
    createdAt: "2026-08-03",
  },
];
