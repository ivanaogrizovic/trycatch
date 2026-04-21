import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Accordion from "../accordion/accordion";

export default function ReviewHistory() {
  const { reviews } = useReview();

  const history = reviews.slice(1);

  return (
    <>
      {history.length > 0 && (
        <div className="review-history">
          <h2>Your review history</h2>

          <Accordion
            items={history.map((r) => ({
              id: r.id,
              title: r.error ? "Error" : "Code Review",

              content: r.error ? (
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
