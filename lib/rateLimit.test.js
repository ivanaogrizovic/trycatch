// lib/rateLimit.test.js
import { rateLimit } from "./rateLimit";
import { Redis } from "@upstash/redis";

jest.mock("@upstash/redis");

describe("rateLimit", () => {
  let mockRedis;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRedis = {
      incr: jest.fn(),
      expire: jest.fn(),
    };
    Redis.mockImplementation(() => mockRedis);
  });

  it("should allow requests under limit", async () => {
    mockRedis.incr.mockResolvedValue(5); // 5th request

    const allowed = await rateLimit("192.168.1.1");

    expect(allowed).toBe(true);
    expect(mockRedis.incr).toHaveBeenCalledWith("rate:192.168.1.1");
  });

  it("should deny requests at limit", async () => {
    mockRedis.incr.mockResolvedValue(11); // 11th request

    const allowed = await rateLimit("192.168.1.1");

    expect(allowed).toBe(false);
  });

  it("should set expiry on first request", async () => {
    mockRedis.incr.mockResolvedValue(1); // First request

    await rateLimit("192.168.1.1");

    expect(mockRedis.expire).toHaveBeenCalledWith("rate:192.168.1.1", 60);
  });

  it("should not set expiry on subsequent requests", async () => {
    mockRedis.incr.mockResolvedValue(5); // 5th request

    await rateLimit("192.168.1.1");

    expect(mockRedis.expire).not.toHaveBeenCalled();
  });

  it("should allow request on Redis error (graceful fallback)", async () => {
    mockRedis.incr.mockRejectedValue(new Error("Redis down"));

    const allowed = await rateLimit("192.168.1.1");

    expect(allowed).toBe(true); // Fail open, allow the request
  });
});
