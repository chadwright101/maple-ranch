import ButtonLink from "@/_components/ui/buttons/button-link";
import classNames from "classnames";
import Image from "next/image";

interface OfferingsComponentProps {
  data: {
    heading: string;
    description: string;
    image1: string;
    image2: string;
    buttonUrl: string;
  };
  backgroundBlue?: boolean;
  index: number;
  reverse?: boolean;
  buttonColor?: "red" | "gold";
}

const OfferingsComponent = ({
  data: { heading, description, image1, image2, buttonUrl },
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
        <ButtonLink href={buttonUrl} color={buttonColor}>
          View More
        </ButtonLink>
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
