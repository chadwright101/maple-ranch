import HeroComponent from "@/_lib/utils/hero-component";
import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import ContactComponent from "@/_components/pages/contact-component";
import EquadToursComponent from "@/_components/pages/adventures/e-quad-tours";

const {
  adventuresPage: { heroGallery, about, eQuadTours },
} = heroGalleryData;

const AdventuresPage = () => {
  return (
    <div className="max-w-[1360px] space-y-15 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="MR Adventures" />
      <AboutComponent data={about} />
      <EquadToursComponent data={eQuadTours} />
      <div id="contact" className="scroll-mt-32" />
      <ContactComponent department="adventures" />
    </div>
  );
};

export default AdventuresPage;
