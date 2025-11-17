interface VerifyRecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
}

interface VerifyResult {
  success: boolean;
  score?: number;
  error?: string;
}

export async function verifyRecaptchaToken(
  token: string
): Promise<VerifyResult> {
  try {
    if (!token) {
      return {
        success: false,
        error: "No reCAPTCHA token provided",
      };
    }

    const verifyData = new FormData();
    verifyData.append("secret", process.env.RECAPTCHA_SECRET_KEY || "");
    verifyData.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        body: verifyData,
      }
    );

    const result: VerifyRecaptchaResponse = await response.json();

    if (!result.success) {
      return {
        success: false,
        error: `reCAPTCHA verification failed: ${result.error_codes?.join(", ") || "unknown error"}`,
      };
    }

    const scoreThreshold = 0.5;
    if ((result.score || 0) < scoreThreshold) {
      return {
        success: false,
        score: result.score,
        error: "reCAPTCHA score too low. Please try again.",
      };
    }

    return {
      success: true,
      score: result.score,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      error: "Failed to verify security. Please try again.",
    };
  }
}
