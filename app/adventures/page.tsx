import HeroComponent from "@/_lib/utils/hero-component";
import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import ContactComponent from "@/_components/pages/contact-component";

const {
  adventuresPage: { heroGallery, about },
} = heroGalleryData;

const AdventuresPage = () => {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="MR Adventures" />
      <AboutComponent data={about} />
      <div id="contact" className="scroll-mt-32" />
      <ContactComponent department="adventures" />
    </div>
  );
};

export default AdventuresPage;
