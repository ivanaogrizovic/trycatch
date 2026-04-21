import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Loading from "../loading/loading";
import Button from "../button/button";
import "./response.css";

export default function Response({ ref }) {
  const { currentReview, error, loading, reset } = useReview();

  return (
    <div ref={ref} className="trycatch-response">
      {loading && <Loading />}
      {currentReview && (
        <>
          <h2>Your code review</h2>
          <div className="trycatch-response-container">
            <ReactMarkdown>{currentReview}</ReactMarkdown>
          </div>
          <Button onClick={reset}>Review another snippet</Button>
        </>
      )}
      {error && <h2>Sorry, an error occurred. Please try again later.</h2>}
    </div>
  );
}
