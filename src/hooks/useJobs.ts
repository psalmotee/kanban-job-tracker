import { useState } from "react";

import { initialJobs } from "@/data";
import type { Job } from "@/types";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  return {
    jobs,
    setJobs,
  };
}
