import { useState } from "react";

import { initialJobs } from "@/data";
import type { Job } from "@/types";
import type { JobStatus } from "@/constants";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  function moveJob(jobId: string, status: JobStatus) {
    setJobs((previousJobs) =>
      previousJobs.map((job) =>
        job.id === jobId
          ? {
              ...job,
              status,
            }
          : job,
      ),
    );
  }

  return {
    jobs,
    moveJob,
  };
}
