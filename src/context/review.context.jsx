import { createContext, useContext, useMemo, useRef, useState } from "react";

const ReviewContext = createContext(null);

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const currentRequest = useRef(null);

  const reviewCode = async (code) => {
    const requestId = Date.now();
    currentRequest.current = requestId;

    setError(null);

    setReviews((prev) => [
      {
        id: requestId,
        code,
        result: null,
        loading: true,
        error: null,
      },
      ...prev,
    ]);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch review");
      }

      if (currentRequest.current === requestId) {
        setReviews((prev) =>
          prev.map((r) =>
            r.id === requestId
              ? { ...r, result: data.review, loading: false }
              : r,
          ),
        );
      }
    } catch (err) {
      if (currentRequest.current === requestId) {
        setReviews((prev) =>
          prev.map((r) =>
            r.id === requestId
              ? { ...r, error: err.message, loading: false }
              : r,
          ),
        );
      }
    }
  };

  const reset = () => {
    currentRequest.current = null;

    setReviews((prev) => prev.slice(1));

    setError(null);
  };

  const currentReview = reviews[0] || null;

  const value = useMemo(
    () => ({
      reviews,
      currentReview,
      error,
      reviewCode,
      reset,
    }),
    [reviews, error, currentReview],
  );

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
};

export const useReview = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return context;
};
