import { createContext, useContext, useMemo, useRef, useState } from "react";

const ReviewContext = createContext(null);

export const ReviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  const currentRequest = useRef(null);

  const reviewCode = async (code) => {
    const requestId = Date.now();
    currentRequest.current = requestId;

    setLoading(true);
    setError(null);
    setReview(null);

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
        setReview(data.review);
      }
    } catch (err) {
      if (currentRequest.current === requestId) {
        setError(err.message || "Something went wrong");
      }
    } finally {
      if (currentRequest.current === requestId) {
        setLoading(false);
      }
    }
  };

  const reset = () => {
    currentRequest.current = null;
    setLoading(false);
    setReview(null);
    setError(null);
  };

  const value = useMemo(
    () => ({
      review,
      loading,
      error,
      reviewCode,
      reset,
    }),
    [review, loading, error],
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
