import { Board } from "@/components/board";
import { Container, Header } from "@/components/layout";
import { initialJobs } from "@/data";

export default function App() {
  return (
    <Container>
      <Header onAddJob={() => {}} />
      <Board jobs={initialJobs} />
    </Container>
  );
}