import { nanoid } from "nanoid";

import { JOB_STATUS, STORAGE_KEYS, type JobStatus } from "@/constants";
import { initialJobs } from "@/data";
import { addJob as addJobToList, moveJob as moveJobToStatus } from "@/lib/jobs";
import type { Job } from "@/types";

import { useLocalStorage } from "./useLocalStorage";

export function useJobs() {
  const {
    value: jobs,
    setValue: setJobs,
    loading,
  } = useLocalStorage<Job[]>({
    key: STORAGE_KEYS.JOBS,
    initialValue: initialJobs,
  });

  function moveJob(jobId: string, status: JobStatus) {
    setJobs((previous) => moveJobToStatus(previous, jobId, status));
  }

  function addJob(company: string, position: string) {
    const job: Job = {
      id: nanoid(),
      company,
      position,
      status: JOB_STATUS.APPLIED,
      createdAt: Date.now(),
    };

    setJobs((previous) => addJobToList(previous, job));
  }

  return {
    jobs,
    moveJob,
    addJob,
    loading,
  };
}
