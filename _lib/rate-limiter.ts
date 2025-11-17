import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

interface RateLimitResult {
  allowed: boolean;
  resetTime: number;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 5, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): RateLimitResult {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    const recentRequests = requests.filter((time) => now - time < this.windowMs);

    if (recentRequests.length >= this.maxRequests) {
      const oldestRequest = recentRequests[0];
      const resetTime = oldestRequest + this.windowMs;
      return {
        allowed: false,
        resetTime,
      };
    }

    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);

    return {
      allowed: true,
      resetTime: 0,
    };
  }
}

export function getClientIP(headers: ReadonlyHeaders): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headers.get("x-real-ip") || "unknown";
}

export const contactVerificationRateLimit = new RateLimiter(5, 60000);
export const contactDataRateLimit = new RateLimiter(10, 60000);
