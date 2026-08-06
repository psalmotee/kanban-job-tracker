import { Board } from "@/components/board";
import { Container, Header } from "@/components/layout";
import { initialJobs } from "@/data";
import { useJobs } from "@/hooks/useJobs";

export default function App() {

  const { jobs, moveJob } = useJobs();

  return (
    <Container>
      <Header onAddJob={() => {}} />
      <Board jobs={jobs} moveJob={moveJob} />
    </Container>
  );
}