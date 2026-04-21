import { useRef } from "react";
import Hero from "../components/hero/hero";
import Prompt from "../components/prompt/prompt";
import Response from "../components/response/response";

export default function Home() {
  const responseRef = useRef(null);

  return (
    <>
      <Hero />
      <Prompt
        scrollToResponse={() => {
          responseRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Response ref={responseRef} />
    </>
  );
}
