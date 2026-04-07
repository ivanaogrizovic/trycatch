import { createContext, useContext, useState } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  const reviewCode = async (code) => {
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

      if (!res.ok) throw new Error(data.error || "Failed to fetch review");

      setReview(data.review);
    } catch (err) {
      setError(err.message || "Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReviewContext.Provider value={{ review, loading, error, reviewCode }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);
