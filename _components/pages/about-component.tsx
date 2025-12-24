import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

interface AboutComponentProps {
  data: {
    heading: string;
    paragraph: string[];
    images: string[];
    button?: {
      text: string;
      href: string;
    };
  };
}

const AboutComponent = ({
  data: { heading, paragraph, images, button },
}: AboutComponentProps) => {
  return (
    <div className="grid gap-10">
      <main className="grid gap-5">
        <h2 className="text-[32px] tablet:text-[40px] font-rye">{heading}</h2>
        <div className="desktop:grid gap-10 desktop:grid-cols-3">
          <div className="space-y-4 desktop:order-last">
            {paragraph.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            {button && (
              <ButtonLink
                color="gold"
                hoverTextColor="blue"
                ariaLabel={button.text}
                href={button.href}
                cssClasses="mt-10"
              >
                {button.text}
              </ButtonLink>
            )}
          </div>
          <div className="grid gap-10 mt-10 tablet:grid-cols-3 desktop:grid-cols-2 desktop:mt-0 desktop:col-span-2">
            <div>
              <Image
                src={images[0]}
                alt={heading}
                width={400}
                height={400}
                className="w-full h-full aspect-square phone:aspect-video object-cover"
              />
            </div>
            <div className="desktop:order-last">
              <Image
                src={images[1]}
                alt={heading}
                width={400}
                height={400}
                className="w-full h-full object-cover aspect-square phone:aspect-video"
              />
            </div>
            <div className="desktop:row-span-2">
              <Image
                src={images[2]}
                alt={heading}
                width={400}
                height={800}
                className="hidden w-full h-full aspect-square object-cover phone:aspect-video tablet:block desktop:object-top"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutComponent;
