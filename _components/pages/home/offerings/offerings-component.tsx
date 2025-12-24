import OfferingCard from "./offering-card";

interface OfferingsComponentProps {
  offerings: any[];
}

export default function OfferingsComponent({
  offerings,
}: OfferingsComponentProps) {
  return (
    <div className="bg-black py-15 -mx-5 px-5 tablet:-mx-7 tablet:px-7 desktop:-mx-10 desktop:px-10">
      <div className="grid gap-15">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-15 tablet:grid-rows-1">
          {offerings.slice(0, 2).map((offering, index) => (
            <OfferingCard
              key={index}
              title={offering.title}
              description={offering.description}
              imageSrcDesktop={offering.imageSrcDesktop}
              imageSrcMobile={offering.imageSrcMobile}
              imageAlt={offering.imageAlt}
              layout={offering.layout}
              contact={offering.contact}
              buttons={offering.buttons}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-15">
          {offerings.slice(2, 5).map((offering, index) => (
            <OfferingCard
              key={index + 2}
              title={offering.title}
              description={offering.description}
              imageSrcDesktop={offering.imageSrcDesktop}
              imageSrcMobile={offering.imageSrcMobile}
              imageAlt={offering.imageAlt}
              layout={offering.layout}
              contact={offering.contact}
              buttons={offering.buttons}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
