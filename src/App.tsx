import { useState } from "react";

import { Board, BoardSkeleton } from "@/components/board";
import { Container, Header } from "@/components/layout";
import { AddJobModal } from "@/components/modal";
import { useJobs } from "@/hooks/useJobs";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { jobs, moveJob, addJob, deleteJob, loading } = useJobs();

  if (loading) {
    return (
      <Container>
        <Header onAddJob={() => {}} />
        <BoardSkeleton />
      </Container>
    );
  }

  return (
    <Container>
      <Header onAddJob={() => setIsModalOpen(true)} />

      <Board jobs={jobs} moveJob={moveJob} onDelete={deleteJob} />

      <AddJobModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addJob} />
    </Container>
  );
}
