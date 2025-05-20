"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";
import DOMPurify from "isomorphic-dompurify";

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

export async function sendEmail(formData: FormData): Promise<void> {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const name = DOMPurify.sanitize(formData.get("name")?.toString() || "");
      const email = DOMPurify.sanitize(formData.get("email")?.toString() || "");
      const phone = DOMPurify.sanitize(formData.get("phone")?.toString() || "");
      const department = DOMPurify.sanitize(
        formData.get("department")?.toString() || ""
      );
      const message = DOMPurify.sanitize(
        formData.get("message")?.toString() || ""
      );

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
            ? "Maple Ranch Adventures"
            : "Maple Ranch"
        }`,
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}
