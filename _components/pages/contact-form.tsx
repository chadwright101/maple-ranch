"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendEmail } from "@/_actions/send-email-actions";
import { verifyContactAction } from "@/_actions/verify-contact-actions";
import ButtonType from "@/_components/ui/buttons/button-type";

type DepartmentType = "general" | "restaurant" | "adventures" | "all";

interface ContactFormProps {
  department?: DepartmentType;
}

const ContactForm = ({ department = "all" }: ContactFormProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLocked = department !== "all";

  const getDepartmentOptions = () => {
    if (department === "general") {
      return isLocked
        ? [{ value: "general", label: "General" }]
        : [
            { value: "general", label: "General" },
            { value: "general", label: "Accommodation" },
            { value: "general", label: "Camping" },
            { value: "general", label: "Quarter Horses" },
          ];
    }
    if (department === "restaurant") {
      return isLocked
        ? [{ value: "restaurant", label: "Restaurant" }]
        : [
            { value: "restaurant", label: "Restaurant" },
            { value: "restaurant", label: "Functions & concerts" },
          ];
    }
    if (department === "adventures") {
      return [{ value: "adventures", label: "Adventures" }];
    }
    return [
      { value: "general", label: "General" },
      { value: "restaurant", label: "Restaurant" },
      { value: "adventures", label: "Adventures" },
      { value: "restaurant", label: "Functions & concerts" },
      { value: "general", label: "Accommodation" },
      { value: "general", label: "Camping" },
      { value: "general", label: "Quarter Horses" },
    ];
  };

  const selectDefaultValue = department === "all" ? "general" : department;

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 text-white tablet:text-left">
          Please fill out the form and we'll be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <p className="text-[20px] text-center text-white tablet:text-left pb-5">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className="flex flex-col gap-10"
          action={async (formData) => {
            try {
              setError(null);

              if (!executeRecaptcha) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (!executeRecaptcha) {
                  setError(
                    "Security verification unavailable. Please refresh the page and try again."
                  );
                  return;
                }
              }

              const recaptchaToken = await executeRecaptcha("contact_form");
              const verifyResult = await verifyContactAction(recaptchaToken);

              if (!verifyResult.success) {
                setError(
                  verifyResult.error || "Verification failed. Please try again."
                );
                return;
              }

              if (isLocked) {
                formData.set("department", department);
              }

              const result = await sendEmail(formData);

              if (result.success) {
                setShowEmailSubmitted(true);
              } else {
                setError(
                  result.error || "Failed to send message. Please try again."
                );
              }
            } catch (err) {
              setError("An unexpected error occurred. Please try again.");
              console.error("Contact form error:", err);
            }
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="fullName"
            className="grid gap-2 text-subheading text-white font-bold"
          >
            Name*:
            <input
              type="text"
              id="fullName"
              name="name"
              className="bg-white h-10 py-4 px-2 rounded-[6px] font-light"
              placeholder="Name goes here..."
              autoComplete="name"
              required
            />
          </label>
          <label
            htmlFor="emailAddress"
            className="grid gap-2 text-subheading text-white font-bold"
          >
            Email*:
            <input
              type="email"
              id="emailAddress"
              name="email"
              className="bg-white h-10 py-4 px-2 rounded-[6px] font-light"
              placeholder="Email address goes here..."
              autoComplete="email"
              required
            />
          </label>
          {!showMessage ? (
            <ButtonType
              type="button"
              cssClasses="tablet:self-start"
              onClick={() => setShowMessage(true)}
              color="gold"
            >
              Next
            </ButtonType>
          ) : (
            <>
              <label
                htmlFor="phoneNumber"
                className="grid gap-2 text-subheading text-white font-bold"
              >
                Phone:
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  className="bg-white h-10 py-4 px-2 rounded-[6px] font-light"
                  placeholder="Phone number goes here..."
                  autoComplete="phone"
                />
              </label>
              <label
                htmlFor="department"
                className="grid gap-2 text-subheading text-white font-bold"
              >
                Department:
                <select
                  id="department"
                  name="department"
                  className={classNames(
                    "text-black bg-white h-10 px-2 rounded-[6px] font-light",
                    {
                      "cursor-not-allowed opacity-50": isLocked,
                    }
                  )}
                  defaultValue={selectDefaultValue}
                  disabled={isLocked}
                >
                  {getDepartmentOptions().map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label
                htmlFor="message"
                className="grid gap-2 text-subheading text-white font-bold"
              >
                Message:
                <textarea
                  id="message"
                  name="message"
                  className="rounded-[6px] bg-white py-4 px-2 font-light"
                  rows={5}
                  placeholder="Message goes here..."
                  required
                ></textarea>
              </label>
              {error && (
                <div className="border border-red-500 rounded p-2 bg-red-50">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              <ButtonType
                type="submit"
                cssClasses="tablet:self-start"
                color="gold"
              >
                Submit
              </ButtonType>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
