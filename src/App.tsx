import { useState } from "react";
import { useJobs } from "@/hooks/useJobs";
import { Container, Header } from "@/components/layout";
import { AddJobModal } from "./components/modal";
import { Board, BoardSkeleton } from "@/components/board";

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { jobs, moveJob, addJob, loading } = useJobs();

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
      <Board jobs={jobs} moveJob={moveJob} />
      <AddJobModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addJob} />
    </Container>
  );
}
