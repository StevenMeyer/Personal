import Container from "@mui/material/Container";
import Header from "@/components/Header";
import About from "@/components/About";
import { Suspense } from "react";
import Demos from "@/components/Demos";
import { getDemos } from "@/get-demos";

export default function Home() {
  const demos = getDemos().then((result) => {
    return result.demos;
  });

  return (
    <Container>
      <Header />
      <Suspense>
        <Demos demos={demos} />
      </Suspense>
      <About />
    </Container>
  );
}
