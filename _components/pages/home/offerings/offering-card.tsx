"use client";

import Image from "next/image";
import classNames from "classnames";

import ContactSubsection from "@/_components/pages/contact-subsection";
import ButtonLink from "@/_components/ui/buttons/button-link";

export interface OfferingCardProps {
  title: string;
  description: string | string[];
  imageSrcDesktop: string;
  imageSrcMobile?: string;
  imageAlt?: string;
  layout?: "side-by-side" | "stacked";
  contact?: {
    department: "adventures" | "restaurant" | "general";
    show: boolean;
  };
  buttons?: {
    primary?: {
      text: string;
      href: string;
      target?: "_self" | "_blank";
    };
    secondary?: {
      text: string;
      href: string;
      target?: "_self" | "_blank";
    };
  };
  cssClasses?: string;
}

const OfferingCard = ({
  title,
  description,
  imageSrcDesktop,
  imageSrcMobile,
  imageAlt = title,
  layout = "stacked",
  contact,
  buttons,
  cssClasses,
}: OfferingCardProps) => {
  const descriptions =
    typeof description === "string" ? [description] : description;

  const cardClasses = classNames(
    "bg-white rounded-lg overflow-hidden shadow-sm",
    cssClasses
  );

  const layoutClasses = classNames("grid h-full", {
    "desktop:grid-cols-2": layout === "side-by-side",
    "grid-cols-1": layout === "stacked",
  });

  const contentClasses = "flex flex-col p-7 gap-5 justify-between";

  return (
    <div
      className={classNames("scroll-mt-10", cardClasses)}
      id={
        title === "Moss & Maple Restaurant"
          ? "restaurant"
          : title.toLowerCase().replace(/\s+/g, "-")
      }
    >
      <div className={layoutClasses}>
        <div className="relative">
          {layout === "stacked" ? (
            <div className="relative w-full aspect-video">
              {!imageSrcMobile ? (
                <Image
                  src={imageSrcDesktop}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <Image
                    src={imageSrcDesktop}
                    alt={imageAlt}
                    fill
                    className="hidden object-cover desktop:block"
                  />
                  <Image
                    src={imageSrcMobile}
                    alt={imageAlt}
                    fill
                    className="object-cover desktop:hidden"
                  />
                </>
              )}
            </div>
          ) : (
            <div className="relative aspect-video desktop:aspect-auto h-full">
              {!imageSrcMobile ? (
                <Image
                  src={imageSrcDesktop}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <Image
                    src={imageSrcDesktop}
                    alt={imageAlt}
                    fill
                    className="hidden object-cover desktop:block"
                  />
                  <Image
                    src={imageSrcMobile}
                    alt={imageAlt}
                    fill
                    className="object-cover desktop:hidden"
                  />
                </>
              )}
            </div>
          )}
        </div>

        <div className={contentClasses}>
          <div className="grid gap-5">
            <div className="grid gap-5">
              <h3 className="text-[24px] tablet:text-subheading-2 font-bold text-black uppercase">
                {title}
              </h3>
              {descriptions.map((paragraph, index) => (
                <p key={index} className="text-paragraph text-black">
                  {paragraph}
                </p>
              ))}
            </div>

            {contact?.show && (
              <ContactSubsection department={contact.department} smallGap />
            )}
          </div>

          {buttons && (buttons.primary || buttons.secondary) && (
            <div className="grid gap-5">
              {buttons.primary && (
                <ButtonLink
                  href={buttons.primary.href}
                  color="gold"
                  hoverTextColor="blue"
                  ariaLabel={buttons.primary.text}
                  target={buttons.primary.target}
                >
                  {buttons.primary.text}
                </ButtonLink>
              )}
              {buttons.secondary && (
                <ButtonLink
                  href={buttons.secondary.href}
                  color="gold"
                  hoverTextColor="blue"
                  ariaLabel={buttons.secondary.text}
                  target={buttons.secondary.target}
                >
                  {buttons.secondary.text}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
