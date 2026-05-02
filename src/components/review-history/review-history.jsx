import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Accordion from "../accordion/accordion";

export default function ReviewHistory() {
  const { reviews } = useReview();

  const history = reviews.slice(1).filter((r) => !r.error && r.result);

  return (
    <>
      {history.length > 0 && (
        <div className="review-history">
          <h2>Your review history</h2>

          <Accordion
            items={history.map((r, index) => ({
              id: r.id,
              title: `Code Review #${index + 1}`,

              content: <ReactMarkdown>{r.result}</ReactMarkdown>,
            }))}
          />
        </div>
      )}
    </>
  );
}
