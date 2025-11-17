"use client";

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { fetchContactData } from "@/_actions/contact-actions";

type ContactSectionProps = {
  title?: string;
  department: string;
  whiteText?: boolean;
  smallGap?: boolean;
  cssClasses?: string;
};

const ContactSubsection = ({
  title,
  department,
  whiteText,
  smallGap,
  cssClasses,
}: ContactSectionProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleShowPhoneNumber = async () => {
    try {
      setError(null);
      setShowSpinnerPhone(true);

      if (!executeRecaptcha) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!executeRecaptcha) {
          setError("Security verification unavailable. Please try again.");
          setShowSpinnerPhone(false);
          return;
        }
      }

      const token = await executeRecaptcha("contact_reveal");
      const result = await fetchContactData(token);

      if (!result.success) {
        setError(result.error || "Failed to load phone number");
        setShowSpinnerPhone(false);
        return;
      }

      let phoneNumber = "";
      if (department === "adventures") {
        phoneNumber = result.data!.adventuresPhone as string;
      } else if (department === "restaurant") {
        phoneNumber = result.data!.restaurantPhone as string;
      } else {
        phoneNumber = result.data!.generalPhone as string;
      }

      setShowPhone(phoneNumber);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error fetching phone number:", err);
    } finally {
      setShowSpinnerPhone(false);
    }
  };

  const handleShowEmailAddress = async () => {
    try {
      setError(null);
      setShowSpinnerEmail(true);

      if (!executeRecaptcha) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!executeRecaptcha) {
          setError("Security verification unavailable. Please try again.");
          setShowSpinnerEmail(false);
          return;
        }
      }

      const token = await executeRecaptcha("contact_reveal");
      const result = await fetchContactData(token);

      if (!result.success) {
        setError(result.error || "Failed to load email address");
        setShowSpinnerEmail(false);
        return;
      }

      let emailAddress = "";
      if (department === "adventures") {
        emailAddress = result.data!.adventuresEmail as string;
      } else if (department === "restaurant") {
        emailAddress = result.data!.restaurantEmail as string;
      } else {
        emailAddress = result.data!.generalEmail as string;
      }

      setShowEmail(emailAddress);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error fetching email address:", err);
    } finally {
      setShowSpinnerEmail(false);
    }
  };

  return (
    <div className={classNames("grid gap-5 desktop:gap-3", cssClasses)}>
      {title && <h3 className="text-subheading font-bold">{title}</h3>}
      <div
        className={classNames("grid gap-1 phone:gap-3 items-center", {
          "phone:grid-cols-[60px_1fr]": !smallGap,
          "phone:grid-cols-[45px_1fr]": smallGap,
        })}
      >
        <h4
          className={classNames("text-subheading", {
            "text-white": whiteText,
          })}
        >
          Email:
        </h4>
        {showEmail === "Show email address" ? (
          <button
            onClick={handleShowEmailAddress}
            className={classNames(
              "text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer text-left tablet:p-0 tablet:m-0 italic tablet:hover:font-bold",
              {
                "text-white": whiteText,
              }
            )}
            aria-label="Show email address"
          >
            {showSpinnerEmail ? (
              <div className="spinner-contact phone:mx-0"></div>
            ) : (
              showEmail
            )}
          </button>
        ) : (
          <Link
            href={`mailto:${showEmail}`}
            className={classNames("text-paragraph mr-auto phone:text-left", {
              "text-white desktop:hover:text-white/80": whiteText,
              "desktop:hover:text-black": !whiteText,
            })}
          >
            {showEmail}
          </Link>
        )}
      </div>
      <div
        className={classNames("grid gap-1 phone:gap-3 items-center", {
          "phone:grid-cols-[60px_1fr]": !smallGap,
          "phone:grid-cols-[45px_1fr]": smallGap,
        })}
      >
        <h4
          className={classNames("text-subheading", {
            "text-white": whiteText,
          })}
        >
          Phone:
        </h4>
        {showPhone === "Show phone number" ? (
          <button
            onClick={handleShowPhoneNumber}
            className={classNames(
              "text-paragraph py-3 px-2 -my-3 -mx-2 hover:cursor-pointer text-left tablet:p-0 tablet:m-0 italic tablet:hover:font-bold",
              {
                "text-white": whiteText,
              }
            )}
            aria-label="Show phone number"
          >
            {showSpinnerPhone ? (
              <div className="spinner-contact phone:mx-0"></div>
            ) : (
              showPhone
            )}
          </button>
        ) : (
          <Link
            href={`tel:${showPhone}`}
            className={classNames("text-paragraph mr-auto phone:text-left", {
              "text-white desktop:hover:text-white/80": whiteText,
              "desktop:hover:text-black": !whiteText,
            })}
          >
            {showPhone}
          </Link>
        )}
      </div>
      {error && (
        <div className="border border-red-500 rounded p-2 bg-red-50">
          <p className="text-red-700 text-paragraph">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ContactSubsection;
