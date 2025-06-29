import HeroComponent from "@/_lib/utils/hero-component";

import heroGalleryData from "@/_data/general-data.json";

const {
  quarterHorsesPage: { heroGallery },
} = heroGalleryData;

const QuarterHorses = () => {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="Quarter Horses" />
    </div>
  );
};

export default QuarterHorses;
