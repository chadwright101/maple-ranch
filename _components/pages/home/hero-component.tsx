import Image from "next/image";

import GallerySlider from "@/_lib/utils/gallery-slider";

import heroGalleryData from "@/_data/general-data.json";

const { heroGallery } = heroGalleryData;

const HeroComponent = () => {
  return (
    <section className="relative">
      <div className="overflow-hidden">
        <GallerySlider
          data={heroGallery}
          cssClasses="h-[500px] phone:h-[575px] tablet:h-[650px] desktop:h-[600px]"
        />
      </div>
      <div className="grid gap-5 place-items-center pt-15 desktop:absolute desktop:top-[250px] desktop:left-0 desktop:z-10 desktop:bg-white/90 desktop:pt-5 desktop:pb-7.5 desktop:px-10">
        <Image
          src="/logo/maple-ranch-logo.png"
          alt="Maple Ranch Logo"
          className="max-w-[300px] object-contain desktop:hidden"
          width={400}
          height={400}
          priority
        />
        <div className="grid place-items-center desktop:place-items-start">
          <p className="text-[2rem] uppercase">Welcome to</p>
          <h1 className="grid gap-1.5 place-items-center border-y-4 border-red/75 pt-4 pb-0.5 mt-1.5 font-passion-one text-[3.75rem] desktop:place-items-start desktop:text-[4.5rem] desktop:pt-5 desktop:pb-1.5">
            Maple Ranch
            <span className="text-[1.25rem] uppercase desktop:text-[1.75rem] desktop:normal-case">
              Plettenberg Bay
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
