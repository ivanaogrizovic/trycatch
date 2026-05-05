import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const LIMIT = 10;
const WINDOW = 60;

export async function rateLimit(ip) {
  try {
    const key = `rate:${ip}`;

    const count = await redis.incr(key);

    if (count === 1) {
      await redis.expire(key, WINDOW);
    }

    return count <= LIMIT;
  } catch (err) {
    console.error("Rate limit check failed:", err.message);
    return true;
  }
}
