"use client";

import { useState } from "react";
import Link from "next/link";

import { fetchContactData } from "@/_actions/contact-actions";
import classNames from "classnames";

type ContactInfoProps = {
  department?: string;
  whiteText?: boolean;
  smallGap?: boolean;
};

const ContactInfo = ({
  department = "general",
  whiteText,
  smallGap,
}: ContactInfoProps) => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showspinnerPhone, setShowspinnerPhone] = useState(false);
  const [showspinnerEmail, setShowspinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowspinnerPhone(true);
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
    setShowspinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowspinnerEmail(true);
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
    setShowspinnerEmail(false);
  };

  return (
    <>
      <div
        className={classNames("grid gap-1 phone:gap-3 items-center", {
          "phone:grid-cols-[60px_1fr]": !smallGap,
          "phone:grid-cols-[45px_1fr]": smallGap,
        })}
      >
        <h3
          className={classNames("text-subheading font-bold", {
            "text-white": whiteText,
          })}
        >
          Email:
        </h3>
        {showEmail === "Show email address" ? (
          <button
            onClick={handleShowEmailAddress}
            className={classNames(
              "text-paragraph py-3 px-2 -my-3 -mx-2 phone:text-left hover:cursor-pointer phone:self-start tablet:p-0 tablet:m-0 italic tablet:hover:font-bold",
              {
                "text-white": whiteText,
              }
            )}
            aria-label="Show email address"
          >
            {showspinnerEmail ? (
              <div className="spinner-contact phone:mx-0"></div>
            ) : (
              showEmail
            )}
          </button>
        ) : (
          <Link
            href={`mailto:${showEmail}`}
            className={classNames("text-paragraph mr-auto phone:text-left ", {
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
        <h3
          className={classNames("text-subheading font-bold", {
            "text-white": whiteText,
          })}
        >
          Phone:
        </h3>
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
            {showspinnerPhone ? (
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
    </>
  );
};

export default ContactInfo;
