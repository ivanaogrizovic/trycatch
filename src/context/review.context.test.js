// src/context/review.context.test.js
import { renderHook, act, waitFor } from "@testing-library/react";
import { ReviewProvider, useReview } from "./review.context";

// Mock fetch
global.fetch = jest.fn();

const wrapper = ({ children }) => <ReviewProvider>{children}</ReviewProvider>;

describe("ReviewContext", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe("reviewCode - Success", () => {
    it("should fetch code review and update state", async () => {
      const mockReview = "## Summary\nGood code";
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ review: mockReview }),
      });

      const { result } = renderHook(() => useReview(), { wrapper });

      act(() => {
        result.current.reviewCode("const x = 1;");
      });

      // Check loading state
      expect(result.current.currentReview.loading).toBe(true);

      await waitFor(() => {
        expect(result.current.currentReview.loading).toBe(false);
      });

      expect(result.current.currentReview.result).toBe(mockReview);
      expect(result.current.currentReview.error).toBeNull();
    });
  });

  describe("reviewCode - Error Handling", () => {
    it("should handle API errors gracefully", async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: "Rate limit exceeded" }),
      });

      const { result } = renderHook(() => useReview(), { wrapper });

      act(() => {
        result.current.reviewCode("const x = 1;");
      });

      await waitFor(() => {
        expect(result.current.currentReview.loading).toBe(false);
      });

      expect(result.current.currentReview.error).toBe("Rate limit exceeded");
      expect(result.current.currentReview.result).toBeNull();
    });

    it("should handle network errors", async () => {
      fetch.mockRejectedValueOnce(new Error("Network failed"));

      const { result } = renderHook(() => useReview(), { wrapper });

      act(() => {
        result.current.reviewCode("const x = 1;");
      });

      await waitFor(() => {
        expect(result.current.currentReview.error).toBe("Network failed");
      });
    });
  });

  describe("reviewCode - Race Conditions", () => {
    it("should cancel previous request when new one starts", async () => {
      let resolve1, resolve2;
      const promise1 = new Promise((r) => (resolve1 = r));
      const promise2 = new Promise((r) => (resolve2 = r));

      fetch.mockReturnValueOnce({ ok: true, json: () => promise1 });
      fetch.mockReturnValueOnce({ ok: true, json: () => promise2 });

      const { result } = renderHook(() => useReview(), { wrapper });

      // Start first request
      act(() => {
        result.current.reviewCode("code1");
      });

      // Start second request before first completes
      act(() => {
        result.current.reviewCode("code2");
      });

      // At this point, currentReview should be for code2 (most recent)
      expect(result.current.reviews).toHaveLength(2);
      expect(result.current.currentReview.code).toBe("code2");

      // Resolve first request (should be ignored)
      resolve1({ review: "Review 1" });

      await waitFor(() => {
        // First request should NOT update currentReview
        expect(result.current.currentReview.result).toBeNull();
      });

      // Resolve second request (should be applied)
      resolve2({ review: "Review 2" });

      await waitFor(() => {
        // Second request SHOULD update
        expect(result.current.currentReview.result).toBe("Review 2");
        expect(result.current.currentReview.loading).toBe(false);
      });
    });
  });

  describe("Review History", () => {
    it("should maintain history of reviews", async () => {
      fetch.mockResolvedValue({
        ok: true,
        json: async () => ({ review: "Review" }),
      });

      const { result } = renderHook(() => useReview(), { wrapper });

      act(() => {
        result.current.reviewCode("code1");
      });

      await waitFor(() => {
        expect(result.current.reviews).toHaveLength(1);
      });

      act(() => {
        result.current.reviewCode("code2");
      });

      await waitFor(() => {
        expect(result.current.reviews).toHaveLength(2);
      });

      // Current should be most recent
      expect(result.current.currentReview).toBe(result.current.reviews[0]);
    });
  });
});
