import HomePageGallerySlider from "./home-page-gallery-slider";
import generalData from "@/_data/general-data.json";
import classNames from "classnames";

const {
  homePage: { gallery },
} = generalData;

interface Props {
  cssClasses?: string;
}

const HomePageGalleryComponent = ({ cssClasses }: Props) => {
  return (
    <section
      className={classNames(
        "flex flex-col gap-6 py-15 tablet:gap-10",
        cssClasses
      )}
    >
      <h2 className="font-rye text-[32px] tablet:text-[40px]">Gallery</h2>
      <HomePageGallerySlider data={gallery} />
    </section>
  );
};

export default HomePageGalleryComponent;
