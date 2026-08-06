import { useState } from "react";
import { nanoid } from "nanoid";

import { initialJobs } from "@/data";
import { JOB_STATUS, type JobStatus } from "@/constants";

import type { Job } from "@/types";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  function moveJob(jobId: string, status: JobStatus) {
    setJobs((previous) => previous.map((job) => (job.id === jobId ? { ...job, status } : job)));
  }

  function addJob(company: string, position: string) {
    const newJob: Job = {
      id: nanoid(),
      company,
      position,
      status: JOB_STATUS.APPLIED,
      createdAt: Date.now(),
    };

    setJobs((previous) => [newJob, ...previous]);
  }

  return {
    jobs,
    moveJob,
    addJob,
  };
}
