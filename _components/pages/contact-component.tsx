"use client";

import Link from "next/link";

import ContactForm from "@/_lib/utils/contact-form";
import SocialIcons from "@/_lib/utils/social-icons";
import MapComponent from "@/_lib/utils/map-component";
import ContactSubsection from "@/_lib/utils/contact-subsection";

type DepartmentType = "general" | "restaurant" | "adventures" | "all";

interface ContactComponentProps {
  department?: DepartmentType;
}

const ContactComponent = ({ department = "all" }: ContactComponentProps) => {
  const showGeneral = department === "all" || department === "general";
  const showRestaurant = department === "all" || department === "restaurant";
  const showAdventures = department === "all" || department === "adventures";

  return (
    <section className="grid gap-10 px-5 tablet:px-10 desktop:grid-cols-2">
      <div className="space-y-10">
        <div className="grid gap-10">
          <h2 className="text-heading font-passion-one border-b-4 border-gold leading-12">
            Contact
          </h2>
        </div>
        <div className="grid gap-5">
          {showGeneral && (
            <>
              <ContactSubsection
                title={
                  department === "all"
                    ? "General enquiries, camping, accommodation & Quarter Horses"
                    : ""
                }
                department="general"
              />
              <hr className="text-black/25" />
            </>
          )}
          {showRestaurant && (
            <>
              <ContactSubsection
                title={
                  department === "all" ? "Restaurant, functions & concerts" : ""
                }
                department="restaurant"
              />
              <hr className="text-black/25" />
            </>
          )}
          {showAdventures && (
            <>
              <ContactSubsection
                title={
                  department === "all"
                    ? "Adventure centre & team building"
                    : ""
                }
                department="adventures"
              />
              <hr className="text-black/25" />
            </>
          )}
          <div className="grid gap-1 phone:gap-3 phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading font-bold">Address:</h3>
            <Link
              href="https://maps.app.goo.gl/FR5ykRdXtMJMcELG9"
              target="_blank"
              className="text-paragraph text-linkBlue mr-auto phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
            >
              1 Pinehaven Rd, Keurbooms Heights, Plettenberg Bay, 6600
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

export default ContactComponent;
