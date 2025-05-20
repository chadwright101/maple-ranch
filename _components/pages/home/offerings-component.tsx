import ButtonLink from "@/_components/ui/buttons/button-link";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface OfferingsComponentProps {
  data: {
    heading: string;
    description: string;
    image1: string;
    image2: string;
    buttonUrl: string;
    menuLink?: string;
    phone: string;
    email: string;
  };
  backgroundBlue?: boolean;
  index: number;
  reverse?: boolean;
  buttonColor?: "red" | "gold";
}

const OfferingsComponent = ({
  data: {
    heading,
    description,
    image1,
    image2,
    buttonUrl,
    menuLink,
    phone,
    email,
  },
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
        <p className={classNames("", { "text-white": backgroundBlue })}>
          {description}
        </p>
        <ul className="grid gap-5">
          <li
            className={classNames("flex gap-2 font-bold", {
              "text-white": backgroundBlue,
            })}
          >
            Tel:{" "}
            <Link
              href={`tel:${phone}`}
              className={classNames(
                "p-2 -m-2 desktop:p-0 desktop:m-0 desktop:hover:opacity-80 ease-in-out duration-300",
                {
                  "text-white": backgroundBlue,
                }
              )}
            >
              {phone}
            </Link>
          </li>
          <li
            className={classNames("flex gap-2 font-bold", {
              "text-white": backgroundBlue,
            })}
          >
            Email:{" "}
            <Link
              href={`mailto:${email}`}
              className={classNames(
                "p-2 -m-2 desktop:p-0 desktop:m-0 desktop:hover:opacity-80 ease-in-out duration-300",
                {
                  "text-white": backgroundBlue,
                }
              )}
              target="_blank"
            >
              {email}
            </Link>
          </li>
          {menuLink && (
            <li>
              <ButtonLink color="red" href={menuLink} target="_blank">
                View Menu
              </ButtonLink>
            </li>
          )}
        </ul>
      </div>
      <div className="grid gap-10 tablet:grid-cols-2 desktop:col-span-2">
        <Image
          src={image1}
          alt={`${heading} - Image 1`}
          width={800}
          height={800}
          className="w-full h-full object-cover aspect-square phone:aspect-video"
        />
        <Image
          src={image2}
          alt={`${heading} - Image 2`}
          width={800}
          height={800}
          className="w-full h-full object-cover aspect-square phone:aspect-video"
        />
      </div>
    </section>
  );
};

export default OfferingsComponent;
