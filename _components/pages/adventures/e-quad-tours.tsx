import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

interface AboutComponentProps {
  data: {
    heading: string;
    subheading: string;
    paragraph: string[];
    pricing: {
      title: string;
      price: string;
      discount: string;
      discountPrice: string;
    };
    hours: string;
    disclaimer: string;
    images: string[];
    button?: {
      text: string;
      href: string;
    };
  };
}

const EquadToursComponent = ({
  data: { heading, paragraph, images, subheading, pricing, disclaimer, button },
}: AboutComponentProps) => {
  return (
    <main className="grid gap-5">
      <h2 className="text-[32px] tablet:text-[40px] font-rye">{heading}</h2>
      <div className="grid gap-10 desktop:grid-cols-3">
        <div className="grid gap-10 tablet:grid-cols-2 desktop:mt-0 desktop:col-span-2">
          {images.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={heading}
                width={1000}
                height={800}
                className="w-full h-full aspect-square phone:aspect-video object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-5">
          <h3 className="text-[20px] font-bold">{subheading}</h3>
          {paragraph.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          <div className="space-y-2 p-4 bg-black rounded-[6px] [&_p]:text-white [&_span]:text-white [&_h4]:text-white">
            <h4 className="text-[20px] font-bold">Pricing:</h4>
            <p>
              {pricing.title}:
              <span className="font-bold ml-2">{pricing.price}</span>
              <span className="ml-2 italic">
                ({pricing.discount}:
                <span className="ml-2 font-bold">{pricing.discountPrice}</span>)
              </span>
            </p>
            <p className="italic">{disclaimer}</p>
          </div>
          {button && (
            <ButtonLink
              color="red"
              hoverTextColor="blue"
              ariaLabel={button.text}
              href={button.href}
              cssClasses="mt-10"
            >
              {button.text}
            </ButtonLink>
          )}
        </div>
      </div>
    </main>
  );
};

export default EquadToursComponent;
