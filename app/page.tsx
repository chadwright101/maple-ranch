import { generatePageMetadata } from "@/_lib/metadata";
import AboutComponent from "@/_components/pages/home/about-component";
import HeroComponent from "@/_lib/utils/hero-component";
import DividerLine from "@/_lib/utils/divider-line";

import offeringsData from "@/_data/general-data.json";
import OfferingsComponent from "@/_components/pages/home/offerings-component";
import ContactComponent from "@/_components/pages/contact-component";
import ReviewSlider from "@/_lib/utils/review-slider";

export const metadata = generatePageMetadata({
  title: 'Maple Ranch - Restaurant, Adventures & Quarter Horses in Plettenberg Bay',
  description:
    'Visit Maple Ranch near Plettenberg Bay for family dining at Moss & Maple Restaurant, outdoor adventures with E-Quad tours, team building, and American Quarter Horse breeding. Located on the N2, just 10 minutes from Plett.',
  keywords: [
    'Maple Ranch',
    'Plettenberg Bay restaurant',
    'Plett family restaurant',
    'Moss and Maple Restaurant',
    'farm stall Plettenberg Bay',
    'kids play park Plett',
    'pony rides',
    'MR Adventures',
    'Quarter Horses South Africa',
    'Blue Haze Quarter Horse Stud',
    'team building Plettenberg Bay',
    'N2 restaurant',
    'Keurbooms restaurant',
    'school camps Plett',
    'outdoor activities Plettenberg Bay',
  ],
  path: '/',
  ogTitle: 'Maple Ranch - Restaurant, Adventures & Quarter Horses in Plettenberg Bay',
  ogDescription:
    'Family restaurant with play park, E-Quad forest tours, team building activities, and American Quarter Horse stud near Plettenberg Bay.',
  twitterTitle: 'Maple Ranch - Restaurant, Adventures & Quarter Horses',
  twitterDescription:
    'Family restaurant, outdoor adventures, and American Quarter Horse stud in Plettenberg Bay.',
  ogImageAlt: 'Maple Ranch - Restaurant, Adventures & Quarter Horses',
});

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
