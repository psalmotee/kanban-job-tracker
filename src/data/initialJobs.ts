import { JOB_STATUS } from "@/constants";

import type { Job } from "@/types";

export const initialJobs: Job[] = [
  {
    id: "job-1",
    company: "Google",
    position: "Frontend Developer",
    status: JOB_STATUS.APPLIED,
    createdAt: new Date("2026-08-01").getTime(),
  },
  {
    id: "job-2",
    company: "Microsoft",
    position: "React Developer",
    status: JOB_STATUS.INTERVIEWING,
    createdAt: new Date("2026-08-02").getTime(),
  },
  {
    id: "job-3",
    company: "Amazon",
    position: "Software Engineer",
    status: JOB_STATUS.OFFER,
    createdAt: new Date("2026-08-03").getTime(),
  },
];
