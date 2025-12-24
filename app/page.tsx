import offeringsData from "@/_data/general-data.json";
import ContactComponent from "@/_components/pages/contact-component";
import HomePageHeroComponent from "@/_components/pages/home/home-page-hero-component";
import AboutNavigationComponent from "@/_components/pages/home/about-navigation-component";
import OfferingsComponent from "@/_components/pages/home/offerings/offerings-component";
import HomePageGalleryComponent from "@/_components/pages/home/gallery/home-page-gallery-component";
import PageWrapper from "@/_lib/page-wrapper";
import ReviewsComponent from "@/_components/pages/home/reviews/reviews-component";

const {
  homePage: { offerings, reviews },
} = offeringsData;

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
