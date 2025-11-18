import AboutComponent from "@/_components/pages/home/about-component";
import HeroComponent from "@/_lib/utils/hero-component";
import DividerLine from "@/_lib/utils/divider-line";

import offeringsData from "@/_data/general-data.json";
import OfferingsComponent from "@/_components/pages/home/offerings-component";
import ContactComponent from "@/_components/pages/contact-component";
import ReviewSlider from "@/_lib/utils/review-slider";

const {
  homePage: { offerings, reviews, heroGallery },
} = offeringsData;

export default function Home() {
  return (
    <div className="max-w-[1360px] space-y-15 mx-auto">
      <HeroComponent galleryData={heroGallery} />
      <DividerLine containerClasses="mx-5 desktop:hidden" />
      <div id="about" className="scroll-mt-32" />
      <AboutComponent />
      <div>
        {offerings.map((offering, index) => (
          <div key={index}>
            <div
              id={
                offering.heading === "Moss & Maple Restaurant and Farmstall"
                  ? "restaurant"
                  : ""
              }
              className="scroll-mt-24"
            />
            <OfferingsComponent
              data={offering}
              index={index}
              backgroundBlue={index % 2 === 0}
              reverse={index % 2 === 0}
              buttonColor={index % 2 === 0 ? "gold" : "red"}
              hoverTextColor={offering.hoverTextColor as "white" | "blue"}
            />
          </div>
        ))}
      </div>
      <DividerLine containerClasses="mx-5 -mt-10 desktop:hidden" />
      <ReviewSlider data={reviews} cssClasses="desktop:-mt-10" />
      <div id="contact" className="scroll-mt-32" />
      <ContactComponent department="all" />
    </div>
  );
}
