import { useRef } from "react";
import Prompt from "../components/prompt/prompt";
import Response from "../components/response/response";

export default function Home() {
  const responseRef = useRef(null);

  return (
    <>
      <Prompt
        scrollToResponse={() => {
          responseRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Response ref={responseRef} />
    </>
  );
}
