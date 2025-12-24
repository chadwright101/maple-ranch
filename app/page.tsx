import offeringsData from "@/_data/general-data.json";
import ContactComponent from "@/_components/pages/contact-component";
import HomePageHeroComponent from "@/_components/pages/home/home-page-hero-component";
import AboutNavigationComponent from "@/_components/pages/home/about-navigation-component";
import OfferingsComponent from "@/_components/pages/home/offerings/offerings-component";
import HomePageGalleryComponent from "@/_components/pages/home/gallery/home-page-gallery-component";
import PageWrapper from "@/_lib/page-wrapper";
import ReviewsComponent from "@/_components/pages/home/reviews/reviews-component";
import { generatePageMetadata } from "@/_lib/metadata";

const {
  homePage: { offerings, reviews },
} = offeringsData;

export const metadata = generatePageMetadata({
  title: "Maple Ranch | Restaurant, Adventures & Accommodation in Plettenberg Bay",
  description: "Experience Maple Ranch near Plettenberg Bay - featuring Moss & Maple Restaurant with farm-to-table dining, outdoor adventures including ATV trails and horse rides, cozy accommodation, and our Blue Haze Quarter Horse Stud. Pet-friendly with kids play areas.",
  keywords: [
    "Maple Ranch",
    "Plettenberg Bay",
    "Plett",
    "Garden Route",
    "restaurant",
    "Moss and Maple",
    "adventures",
    "accommodation",
    "quarter horses",
    "ATV trails",
    "horse trails",
    "family friendly",
    "pet friendly",
    "Keurbooms",
    "farm restaurant",
    "outdoor activities",
    "pony rides",
    "camping",
    "tiny house",
    "Blue Haze Quarter Horse Stud"
  ],
  path: "/",
});

export default function Home() {
  return (
    <div className="max-w-[1360px] mx-auto">
      <HomePageHeroComponent />
      <PageWrapper cssClasses="flex flex-col gap-15 mt-15">
        <AboutNavigationComponent />
        <OfferingsComponent offerings={offerings} />
        <HomePageGalleryComponent />
        <ReviewsComponent data={reviews} cssClasses="desktop:-mt-10" />
        <div id="contact" className="scroll-mt-0" />
        <ContactComponent department="all" />
      </PageWrapper>
    </div>
  );
}
