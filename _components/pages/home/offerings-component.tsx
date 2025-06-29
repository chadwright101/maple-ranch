import ButtonLink from "@/_components/ui/buttons/button-link";
import ContactSubsection from "@/_lib/utils/contact-subsection";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface OfferingsComponentProps {
  data: {
    heading: string;
    paragraph: string[];
    images: string[];
    buttonUrl: string;
    department: string;
    menuLink?: string;
  };
  backgroundBlue?: boolean;
  index: number;
  reverse?: boolean;
  buttonColor?: "red" | "gold";
}

const addLink = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Link
        href="/#adventures"
        key={i}
        aria-label="Maple Ranch Adventures"
        className="p-2 -m-2 desktop:p-0 desktop:m-0"
      >
        {part}
      </Link>
    ) : (
      part
    )
  );
};

const OfferingsComponent = ({
  data: { heading, paragraph, images, buttonUrl, department, menuLink },
  backgroundBlue,
  index,
  reverse,
  buttonColor,
}: OfferingsComponentProps) => {
  return (
    <section
      key={index}
      className={classNames(
        "py-10 px-5 grid gap-10 desktop:px-10 desktop:grid-cols-3",
        {
          "bg-blue": backgroundBlue,
        }
      )}
    >
      <div
        className={classNames("space-y-5", {
          "desktop:order-last": !reverse,
        })}
      >
        <h3
          className={classNames(
            "text-heading font-passion-one border-b-4 leading-12",
            {
              "text-white border-gold": backgroundBlue,
              "text-blue border-red": !backgroundBlue,
            }
          )}
        >
          {heading}
        </h3>
        {paragraph.map((paragraph, index) => (
          <p
            key={index}
            className={classNames({ "text-white": backgroundBlue })}
          >
            {addLink(paragraph)}
          </p>
        ))}
        <div className="grid gap-5">
          <ContactSubsection
            department={department}
            whiteText={backgroundBlue}
            smallGap
          />
          <div className="space-y-3">
            {/* <ButtonLink color={buttonColor || "red"} href={buttonUrl}>
              Learn More
            </ButtonLink> */}
            {menuLink && (
              <ButtonLink color="red" href={menuLink} target="_blank">
                View Menu
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-10 tablet:grid-cols-2 desktop:col-span-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${heading} - Image ${index + 1}`}
            width={800}
            height={800}
            className={classNames(
              "w-full h-full object-cover aspect-square phone:aspect-video",
              {
                "hidden desktop:block": index > 1,
              }
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferingsComponent;
