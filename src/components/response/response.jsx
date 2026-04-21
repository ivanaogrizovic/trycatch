import { forwardRef } from "react";
import { useReview } from "../../context/review.context";
import ReactMarkdown from "react-markdown";
import Loading from "../loading/loading";
import "./response.css";

const Response = forwardRef((props, ref) => {
  const { currentReview } = useReview();

  return (
    <div ref={ref} className="trycatch-response">
      {currentReview?.loading && <Loading />}

      {currentReview?.result && (
        <>
          <h2>Your code review</h2>

          <div className="trycatch-response-container">
            <ReactMarkdown>{currentReview.result}</ReactMarkdown>
          </div>
        </>
      )}
      {currentReview?.error && (
        <>
          <h2 className="trycatch-error">{currentReview.error}</h2>
          <p>Please try again</p>
        </>
      )}
    </div>
  );
});

export default Response;
