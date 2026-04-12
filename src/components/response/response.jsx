import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import "./response.css";

export default function Response() {
  const { review, loading, error } = useReview();

  return (
    <div className="trycatch-response">
      {loading && <h2>Reviewing...</h2>}
      {review && (
        <>
          <h2>Ai response</h2>
          <div className="trycatch-response-container">
            <ReactMarkdown>{review}</ReactMarkdown>
          </div>
        </>
      )}
      {error && <h2>Sorry, an error occurred. Please try again later.</h2>}
    </div>
  );
}
