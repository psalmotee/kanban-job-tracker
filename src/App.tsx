import { Badge, Button, Card, EmptyState, Skeleton } from "@/components/ui";

export default function App() {
  return (
    <main className="space-y-6 p-8">
      <Button>Add Job</Button>

      <Button variant="secondary">Cancel</Button>

      <Card className="p-6">
        <h2 className="font-semibold">Frontend Developer</h2>
        <p>Spotify</p>
      </Card>

      <Badge>Applied</Badge>

      <EmptyState title="No jobs yet" description="Add your first application." />

      <Skeleton className="h-24 w-full" />
    </main>
  );
}
