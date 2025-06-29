"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Recaptcha from "@/_lib/recaptcha";
import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 text-white tablet:text-left">
          Please fill out the form and we’ll be in touch ASAP...
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
            await sendEmail(formData);
            setShowEmailSubmitted(true);
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
                htmlFor="emailAddress"
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
                  className="text-blue bg-white h-10 px-2 rounded-[6px] font-light"
                  defaultValue="general"
                >
                  <option value="general">General</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="adventures">Adventures</option>
                  <option value="restaurant">Functions & concerts</option>
                  <option value="general">Accommodation</option>
                  <option value="general">Camping</option>
                  <option value="general">Quarter Horses</option>
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
              <ButtonType
                type="submit"
                cssClasses={classNames("tablet:self-start", {
                  "opacity-50 desktop:cursor-not-allowed": !validateRecaptcha,
                })}
                disabled={!validateRecaptcha}
                color="gold"
              >
                Submit
              </ButtonType>
              {!validateRecaptcha && (
                <Recaptcha onChange={handleRecaptchaChange} />
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
