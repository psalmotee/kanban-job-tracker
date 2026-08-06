export const JOB_STATUS = {
  APPLIED: "Applied",
  INTERVIEWING: "Interviewing",
  OFFER: "Offer",
  REJECTED: "Rejected",
} as const;

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export const BOARD_COLUMNS = [
  {
    id: JOB_STATUS.APPLIED,
    title: "Applied",
  },
  {
    id: JOB_STATUS.INTERVIEWING,
    title: "Interviewing",
  },
  {
    id: JOB_STATUS.OFFER,
    title: "Offer",
  },
  {
    id: JOB_STATUS.REJECTED,
    title: "Rejected",
  },
] as const;

export const JOB_STATUS_OPTIONS = Object.values(JOB_STATUS);
