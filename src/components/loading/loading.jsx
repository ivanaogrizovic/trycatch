import { useState, useEffect } from "react";
import catGif from "../../assets/hanging-cat.gif";
import "./loading.css";

const steps = [
  "Analyzing code structure...",
  "Checking for bugs...",
  "Evaluating edge cases...",
  "Generating suggestions...",
];

export default function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trycatch-loading-container">
      <h2>Reviewing your code</h2>
      <p>Please sit tight. This is a free API, so it's not the fastest.</p>
      <p className="trycatch-loading-steps">{steps[index]}</p>
      <img alt="" className="trycatch-loading-cat" src={catGif} />
    </div>
  );
}
