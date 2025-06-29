import Image from "next/image";

import GallerySlider from "@/_lib/utils/gallery-slider";
import classNames from "classnames";

interface HeroComponentProps {
  galleryData: string[];
  homePage?: boolean;
  pageName?: string;
}

const HeroComponent = ({
  galleryData,
  homePage,
  pageName,
}: HeroComponentProps) => {
  return (
    <section className="relative grid">
      <div
        className={classNames("overflow-hidden", {
          "order-last desktop:order-first": pageName,
        })}
      >
        <GallerySlider
          data={galleryData}
          cssClasses="h-[500px] phone:h-[575px] tablet:h-[650px] desktop:h-[600px]"
        />
      </div>
      <div
        className={classNames(
          "grid gap-5 place-items-center desktop:absolute desktop:top-[250px] desktop:left-0 desktop:z-10 desktop:bg-white/90 desktop:px-10",
          {
            "pt-15 desktop:pt-10 desktop:pb-10": !pageName,
          }
        )}
      >
        <Image
          src="/logo/maple-ranch-logo.png"
          alt="Maple Ranch Logo"
          className={classNames("max-w-[300px] object-contain desktop:hidden", {
            hidden: pageName,
          })}
          width={400}
          height={400}
          priority
        />
        <div>
          <p
            className={classNames("text-[2rem] uppercase", {
              hidden: !homePage,
            })}
          >
            Welcome to
          </p>
          <h1
            className={classNames(
              "grid gap-1.5 place-items-center border-y-4 border-red/75",
              {
                "font-passion-one text-[3.75rem] desktop:text-[4.5rem] pt-4 pb-0.5 mt-1.5 desktop:pt-5 desktop:pb-1.5 desktop:place-items-start":
                  !pageName,
                "text-[1.25rem] uppercase font-pt-sans desktop:text-[1.75rem] desktop:normal-case pb-4 pt-0.5 my-15 desktop:pb-3 desktop:pt-0 desktop:my-10":
                  pageName,
              }
            )}
          >
            Maple Ranch
            <span
              className={classNames({
                "font-passion-one text-[3.75rem] normal-case": pageName,
                "text-[1.25rem] uppercase desktop:text-[1.75rem] desktop:normal-case":
                  !pageName,
              })}
            >
              {pageName ? pageName : "Plettenberg Bay"}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
