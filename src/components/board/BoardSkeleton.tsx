import { Skeleton } from "@/components/ui";

export function BoardSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, columnIndex) => (
        <section key={columnIndex} className="rounded-xl bg-slate-50 p-4">
          <Skeleton className="mb-5 h-6 w-32 rounded-md" />

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, cardIndex) => (
              <Skeleton key={cardIndex} className="h-28 rounded-xl" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
