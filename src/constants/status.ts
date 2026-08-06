export const JOB_STATUS = {
  APPLIED: "Applied",
  INTERVIEWING: "Interviewing",
  OFFER: "Offer",
  REJECTED: "Rejected",
} as const;

export const JOB_STATUS_OPTIONS = Object.values(JOB_STATUS);
