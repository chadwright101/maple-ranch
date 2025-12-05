"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";

export interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

export async function sendEmail(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const honey = formData.get("_honey");

  try {
    if (honey) {
      console.error("Invalid form submission due to non-empty honeypot field");
      return {
        success: false,
        error: "Invalid form submission",
      };
    }

    const name = (formData.get("name")?.toString() || "").trim();
    const email = (formData.get("email")?.toString() || "").trim();
    const phone = (formData.get("phone")?.toString() || "").trim();
    const department = (formData.get("department")?.toString() || "").trim();
    const message = (formData.get("message")?.toString() || "").trim();

    const emailHtmlContent = emailTemplate({
      name,
      email,
      department,
      phone,
      message,
    } as EmailTemplateData);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
      requireTLS: true,
    });

    const departmentEmail =
      department === "restaurant"
        ? process.env.SMTP_RESTAURANT_EMAIL
        : department === "adventures"
        ? process.env.SMTP_ADVENTURES_EMAIL
        : process.env.SMTP_GENERAL_EMAIL;
    if (!departmentEmail) {
      throw new Error("Department email is not defined");
    }

    const mailOptions: MailOptions = {
      from: process.env.SMTP_USER as string,
      to: departmentEmail,
      subject: `Website form submission - ${
        department === "restaurant"
          ? "Moss & Maple"
          : department === "adventures"
          ? "MR Adventures"
          : "Maple Ranch"
      }`,
      replyTo: email,
      html: emailHtmlContent,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to send email. Please try again.",
    };
  }
}
