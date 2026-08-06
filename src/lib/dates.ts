/**
 * Formats a timestamp into a relative date.
 */
export function formatRelativeDate(timestamp: number) {
  const now = Date.now();

  const difference = now - timestamp;

  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(difference / day);

  if (days <= 0) return "Today";

  if (days === 1) return "Yesterday";

  return `${days} days ago`;
}
