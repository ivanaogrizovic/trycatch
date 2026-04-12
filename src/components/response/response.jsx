import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Loading from "../loading/loading";
import "./response.css";

export default function Response({ ref }) {
  const { review, error, loading } = useReview();

  return (
    <div ref={ref} className="trycatch-response">
      {loading && <Loading />}
      {review && (
        <>
          <h2>Your code review</h2>
          <div className="trycatch-response-container">
            <ReactMarkdown>{review}</ReactMarkdown>
          </div>
        </>
      )}
      {error && <h2>Sorry, an error occurred. Please try again later.</h2>}
    </div>
  );
}
