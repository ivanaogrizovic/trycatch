import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Accordion from "../accordion/accordion";

export default function ReviewHistory() {
  const { reviews } = useReview();

  return (
    <>
      {reviews.length > 0 && (
        <div className="review-history">
          <h2>Your review history</h2>
          <Accordion
            items={reviews.map((r) => ({
              id: r.id,
              title: r.loading
                ? "Analyzing..."
                : r.error
                  ? "Error"
                  : "Code Review",

              content: r.loading ? (
                <p>Loading...</p>
              ) : r.error ? (
                <p>{r.error}</p>
              ) : (
                <ReactMarkdown>{r.result}</ReactMarkdown>
              ),
            }))}
          />
        </div>
      )}
    </>
  );
}
