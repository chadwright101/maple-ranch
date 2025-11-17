"use server";

import { headers } from "next/headers";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";
import { contactDataRateLimit, getClientIP } from "@/_lib/rate-limiter";

const adventuresEmail = process.env.SMTP_ADVENTURES_EMAIL;
const adventuresPhone = process.env.CONTACT_ADVENTURES_PHONE;
const restaurantEmail = process.env.SMTP_RESTAURANT_EMAIL;
const restaurantPhone = process.env.CONTACT_RESTAURANT_PHONE;
const generalEmail = process.env.SMTP_GENERAL_EMAIL;
const generalPhone = process.env.CONTACT_GENERAL_PHONE;

export const fetchContactData = async (token?: string) => {
  try {
    if (token) {
      const headersList = await headers();
      const clientIP = getClientIP(headersList);
      const rateLimitResult = contactDataRateLimit.isAllowed(clientIP);

      if (!rateLimitResult.allowed) {
        const waitTime = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
        throw new Error(`Rate limited. Please try again in ${waitTime} seconds.`);
      }

      const verifyResult = await verifyRecaptchaToken(token);
      if (!verifyResult.success) {
        throw new Error(verifyResult.error || "Verification failed");
      }
    }

    return {
      success: true,
      data: {
        adventuresEmail,
        adventuresPhone,
        restaurantEmail,
        restaurantPhone,
        generalEmail,
        generalPhone,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch contact data",
    };
  }
};
