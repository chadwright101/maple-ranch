import { generatePageMetadata } from "@/_lib/metadata";
import HeroComponent from "@/_lib/hero-component";

import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import SiresComponent from "@/_components/pages/quarter-horses/sires-component";

export const metadata = generatePageMetadata({
  title: "Blue Haze American Quarter Horse Stud | Maple Ranch Plettenberg Bay",
  description:
    "Visit Blue Haze American Quarter Horse Stud at Maple Ranch, Plettenberg Bay. Established in 2010, breeding registered American Quarter Horses for athleticism, temperament and beauty. Meet our sire Bold Enterprise and view new foals from August.",
  keywords: [
    "American Quarter Horse",
    "Quarter Horse stud South Africa",
    "Blue Haze Quarter Horse Stud",
    "horse breeding Plettenberg Bay",
    "registered Quarter Horses",
    "Bold Enterprise",
    "Quarter Horse foals",
    "American Quarter Horse breeding",
    "Quarter Horse mares",
    "Maple Ranch horses",
    "Quarter Horse stud Plett",
    "horse stud Western Cape",
    "Quarter Horse South Africa",
  ],
  path: "/quarter-horses",
  ogTitle: "Blue Haze American Quarter Horse Stud | Maple Ranch",
  ogDescription:
    "Breeding registered American Quarter Horses at Maple Ranch, Plettenberg Bay. View our stud sire Bold Enterprise and meet our new foals from August onwards.",
  twitterTitle: "Blue Haze American Quarter Horse Stud",
  twitterDescription:
    "Breeding registered American Quarter Horses at Maple Ranch, Plettenberg Bay.",
  ogImageAlt: "Blue Haze American Quarter Horse Stud",
});

const {
  quarterHorsesPage: { heroGallery, about },
} = heroGalleryData;

const QuarterHorses = () => {
  return (
    <div className="max-w-[1360px] space-y-15 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="Quarter Horses" />
      <AboutComponent data={about} />
      <div id="sires" className="scroll-mt-0" />
      <SiresComponent />
    </div>
  );
};

export default QuarterHorses;
