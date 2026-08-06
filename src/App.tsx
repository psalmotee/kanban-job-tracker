import { useState } from "react";
import { Board } from "@/components/board";
import { Container, Header } from "@/components/layout";
import { useJobs } from "@/hooks/useJobs";
import { AddJobModal } from "./components/modal";
import { BoardSkeleton } from "@/components/board";

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
      <AddJobModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addJob} />
      <Board jobs={jobs} moveJob={moveJob} />
    </Container>
  );
}
