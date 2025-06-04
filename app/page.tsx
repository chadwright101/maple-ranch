import AboutComponent from "@/_components/pages/home/about-component";
import HeroComponent from "@/_components/pages/home/hero-component";
import DividerLine from "@/_lib/utils/divider-line";

import offeringsData from "@/_data/general-data.json";
import OfferingsComponent from "@/_components/pages/home/offerings-component";
import ContactSection from "@/_components/pages/home/contact/contact-section";

const { offerings } = offeringsData;

export default function Home() {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent />
      <DividerLine containerClasses="mx-5 desktop:hidden" />
      <div id="about" className="-translate-y-32" />
      <AboutComponent />
      <div>
        {offerings.map((offering, index) => (
          <div key={index}>
            <div
              id={
                offering.heading === "Adventures"
                  ? "adventures"
                  : offering.heading === "Moss & Maple Restaurant and Farmstall"
                  ? "restaurant"
                  : ""
              }
              className="-translate-y-24"
            />
            <OfferingsComponent
              data={offering}
              index={index}
              backgroundBlue={index % 2 === 0}
              reverse={index % 2 === 0}
              buttonColor={index % 2 === 0 ? "gold" : "red"}
            />
          </div>
        ))}
      </div>
      <DividerLine containerClasses="mx-5 desktop:hidden" />
      <div id="contact" className="-translate-y-32" />
      <ContactSection />
    </div>
  );
}
