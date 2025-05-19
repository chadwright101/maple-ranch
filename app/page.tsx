import AboutComponent from "@/_components/pages/home/about-component";
import HeroComponent from "@/_components/pages/home/hero-component";
import DividerLine from "@/_lib/utils/divider-line";

import offeringsData from "@/_data/general-data.json";
import OfferingsComponent from "@/_components/pages/home/offerings-component";

const { offerings } = offeringsData;

export default function Home() {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent />
      <DividerLine containerClasses="mx-5 desktop:hidden" />
      <AboutComponent />
      <div>
        {offerings.map((offering, index) => (
          <OfferingsComponent
            data={offering}
            key={index}
            index={index}
            backgroundBlue={index % 2 === 0}
            reverse={index % 2 === 0}
            buttonColor={index % 2 === 0 ? "gold" : "red"}
          />
        ))}
      </div>
      <DividerLine containerClasses="mx-5 desktop:hidden" />
    </div>
  );
}
