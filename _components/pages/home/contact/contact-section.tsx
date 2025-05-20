"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { fetchContactData } from "@/_actions/contact-actions";
import ContactForm from "./contact-form";
import SocialIcons from "@/_lib/utils/social-icons";
import MapComponent from "./map-component";

type ContactSectionProps = {
  department?: "general" | "restaurant" | "adventures";
};

const ContactSection = ({ department = "general" }: ContactSectionProps) => {
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
    <section className="grid gap-10 px-5 pt-10 tablet:px-10 desktop:grid-cols-2">
      <div className="space-y-10">
        <div className="grid gap-10">
          <h2 className="text-heading font-passion-one border-b-4 border-gold leading-12">
            Contact
          </h2>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-1 phone:gap-3 items-center phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading font-bold">Email:</h3>
            {showEmail === "Show email address" ? (
              <button
                onClick={handleShowEmailAddress}
                className="text-paragraph text-linkBlue py-3 px-2 -my-3 -mx-2 phone:text-left hover:cursor-pointer phone:self-start tablet:p-0 tablet:m-0 italic text-link tablet:hover:text-black/80"
                aria-label="Show email address"
              >
                {showspinnerEmail ? (
                  <div className="mx-auto spinner-contact phone:mx-0"></div>
                ) : (
                  showEmail
                )}
              </button>
            ) : (
              <Link
                href={`mailto:${showEmail}`}
                className="text-paragraph text-linkBlue phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
              >
                {showEmail}
              </Link>
            )}
          </div>
          <div className="grid gap-1 phone:gap-3 items-center phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading font-bold">Phone:</h3>
            {showPhone === "Show phone number" ? (
              <button
                onClick={handleShowPhoneNumber}
                className="text-paragraph text-linkBlue py-3 px-2 -my-3 -mx-2 hover:cursor-pointer phone:text-left tablet:p-0 tablet:m-0 italic text-link tablet:hover:text-black/80"
                aria-label="Show phone number"
              >
                {showspinnerPhone ? (
                  <div className="mx-auto spinner-contact phone:mx-0"></div>
                ) : (
                  showPhone
                )}
              </button>
            ) : (
              <Link
                href={`tel:${showPhone}`}
                className="text-paragraph text-linkBlue phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
              >
                {showPhone}
              </Link>
            )}
          </div>
          <div className="grid gap-1 phone:gap-3 phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading font-bold">Address:</h3>
            <Link
              href="https://maps.app.goo.gl/FR5ykRdXtMJMcELG9"
              target="_blank"
              className="text-paragraph text-linkBlue phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
            >
              Pinehaven Rd, Keurbooms Heights, Plettenberg Bay, 6600
            </Link>
          </div>
        </div>
        <SocialIcons />
      </div>
      <MapComponent cssClasses="w-full aspect-square tablet:aspect-video desktop:row-span-2 desktop:aspect-auto desktop:h-full" />
      <div className="bg-blue rounded-[6px] px-5 py-10 w-full">
        <ContactForm department={department} />
      </div>
    </section>
  );
};

export default ContactSection;
