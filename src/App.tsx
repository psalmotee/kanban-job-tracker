import { useState } from "react";
import { Board } from "@/components/board";
import { Container, Header } from "@/components/layout";
import { initialJobs } from "@/data";
import { useJobs } from "@/hooks/useJobs";
import { AddJobModal } from "./components/modal/AddJobModal";

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { jobs, moveJob, addJob } = useJobs();

  return (
    <Container>
      <Header onAddJob={() => setIsModalOpen(true)} />
      <AddJobModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addJob} />
      <Board jobs={jobs} moveJob={moveJob} />
    </Container>
  );
}
