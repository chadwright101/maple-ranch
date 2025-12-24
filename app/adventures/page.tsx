import { generatePageMetadata } from "@/_lib/metadata";
import HeroComponent from "@/_lib/hero-component";
import heroGalleryData from "@/_data/general-data.json";
import AboutComponent from "@/_components/pages/about-component";
import ContactComponent from "@/_components/pages/contact-component";
import EquadToursComponent from "@/_components/pages/adventures/e-quad-tours";
import PageWrapper from "@/_lib/page-wrapper";

export const metadata = generatePageMetadata({
  title:
    "MR Adventures - E-Quad Tours & Team Building at Maple Ranch in Plettenberg Bay",
  description:
    "Experience guided electric quad bike tours through indigenous forests near Plettenberg Bay. Offering team building, school camps, kayaking, and outdoor adventures. Open daily 07:30-18:00. Book your E-Quad tour from R650pp.",
  keywords: [
    "MR Adventures",
    "E-Quad tours Plettenberg Bay",
    "electric quad bike tours Plett",
    "forest trails Plettenberg Bay",
    "team building Plett",
    "school camps Plettenberg Bay",
    "corporate team building",
    "kayaking Plettenberg Bay",
    "outdoor adventures Plett",
    "ATV tours South Africa",
    "guided quad tours",
    "Keurbooms adventures",
    "whale viewing Plett",
    "electric quad bikes",
  ],
  path: "/adventures",
  ogTitle:
    "MR Adventures - E-Quad Tours & Team Building at Maple Ranch in Plettenberg Bay",
  ogDescription:
    "Whisper-quiet electric quad bike tours through indigenous forest, team building programs, and outdoor adventures near Plettenberg Bay. Book your adventure today!",
  twitterTitle: "MR Adventures - E-Quad Tours & Outdoor Activities",
  twitterDescription:
    "Guided electric quad bike tours through indigenous forest and team building in Plettenberg Bay.",
  ogImageAlt: "MR Adventures - E-Quad Tours & Outdoor Activities",
});

const {
  adventuresPage: { heroGallery, about, eQuadTours },
} = heroGalleryData;

const AdventuresPage = () => {
  return (
    <div className="max-w-[1360px] mx-auto">
      <HeroComponent galleryData={heroGallery} pageName="MR Adventures" />
      <PageWrapper cssClasses="grid gap-15 pt-15">
        <AboutComponent data={about} />
        <EquadToursComponent data={eQuadTours} />
        <div id="contact" className="scroll-mt-0" />
        <ContactComponent department="adventures" />
      </PageWrapper>
    </div>
  );
};

export default AdventuresPage;
