import { useRef } from "react";
import Hero from "../components/hero/hero";
import Prompt from "../components/prompt/prompt";
import Response from "../components/response/response";
import ReviewHistory from "../components/review-history/review-history";

export default function Home() {
  const responseRef = useRef(null);

  return (
    <>
      <Hero />
      <main>
        <Prompt
          scrollToResponse={() => {
            responseRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Response ref={responseRef} />
        <ReviewHistory />
      </main>
    </>
  );
}
