import HeroComponent from "@/_lib/utils/hero-component";

import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/quarter-horses/about-component";
import SiresComponent from "@/_components/pages/quarter-horses/sires-component";

const {
  quarterHorsesPage: { heroGallery },
} = heroGalleryData;

const QuarterHorses = () => {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="Quarter Horses" />
      <AboutComponent />
      <div id="sires" className="-translate-y-32" />
      <SiresComponent />
    </div>
  );
};

export default QuarterHorses;
