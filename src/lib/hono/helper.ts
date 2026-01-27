import type { Context } from "hono";

export function createRateLimiterIdentifier(c: Context) {
  const ip = c.req.header("cf-connecting-ip") || "unknown";
  return `${ip}:${c.req.method}:${c.req.path}`;
}
