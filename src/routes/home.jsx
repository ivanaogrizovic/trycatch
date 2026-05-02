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
            setTimeout(() => {
              responseRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
        />
        <Response ref={responseRef} />
        <ReviewHistory />
      </main>
    </>
  );
}
