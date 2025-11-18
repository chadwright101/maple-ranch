import HeroComponent from "@/_lib/utils/hero-component";

import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import SiresComponent from "@/_components/pages/quarter-horses/sires-component";
import ContactComponent from "@/_components/pages/contact-component";

const {
  quarterHorsesPage: { heroGallery, about },
} = heroGalleryData;

const QuarterHorses = () => {
  return (
    <div className="max-w-[1360px] space-y-15 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="Quarter Horses" />
      <AboutComponent data={about} />
      <div id="sires" className="scroll-mt-32" />
      <SiresComponent />
    </div>
  );
};

export default QuarterHorses;
