"use server";

import { headers } from "next/headers";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";
import { contactVerificationRateLimit, getClientIP } from "@/_lib/rate-limiter";

export async function verifyContactAction(token: string): Promise<{ success: boolean; error?: string }> {
  try {
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = contactVerificationRateLimit.isAllowed(clientIP);

    if (!rateLimitResult.allowed) {
      const waitTime = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      return {
        success: false,
        error: `Too many verification attempts. Please try again in ${waitTime} seconds.`
      };
    }

    const result = await verifyRecaptchaToken(token);

    if (result.success) {
      return { success: true };
    } else {
      return {
        success: false,
        error: result.error || "reCAPTCHA verification failed"
      };
    }
  } catch (error) {
    console.error("Contact verification error:", error);
    return {
      success: false,
      error: "Verification service temporarily unavailable. Please try again."
    };
  }
}
