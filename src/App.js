import { useState } from "react";
import { useReview } from "./context/review.context";

export default function App() {
  const { reviewCode, review, loading } = useReview();
  const [code, setCode] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setCode(e.target.value)} />

      <button onClick={() => reviewCode(code)}>Review Code</button>

      {loading && <p>Reviewing...</p>}

      {review && <pre>{JSON.stringify(review, null, 2)}</pre>}
    </div>
  );
}
