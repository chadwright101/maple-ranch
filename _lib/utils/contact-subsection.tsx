"use client";

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

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
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    const contactData = await fetchContactData();

    let phoneNumber = "";
    if (department === "adventures") {
      phoneNumber = contactData.adventuresPhone as string;
    } else if (department === "restaurant") {
      phoneNumber = contactData.restaurantPhone as string;
    } else {
      phoneNumber = contactData.generalPhone as string;
    }

    setShowPhone(phoneNumber);
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    const contactData = await fetchContactData();

    let emailAddress = "";
    if (department === "adventures") {
      emailAddress = contactData.adventuresEmail as string;
    } else if (department === "restaurant") {
      emailAddress = contactData.restaurantEmail as string;
    } else {
      emailAddress = contactData.generalEmail as string;
    }

    setShowEmail(emailAddress);
    setShowSpinnerEmail(false);
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
    </div>
  );
};

export default ContactSubsection;
