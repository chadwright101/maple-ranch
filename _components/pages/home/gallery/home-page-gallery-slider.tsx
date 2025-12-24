"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import classNames from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  data: string[];
}

const HomePageGallerySlider = ({ cssClasses, data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div
      className={classNames(
        "flex flex-col gap-2 overflow-hidden relative aspect-square tablet:aspect-video",
        cssClasses
      )}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
        pagination={{
          dynamicBullets: true,
        }}
        loop
        spaceBetween={20}
        breakpoints={{
          1280: {
            pagination: false,
          },
        }}
        style={
          {
            "--swiper-pagination-color": "#4079B7",
            "--swiper-pagination-bullet-inactive-color": "#4079B7",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="pb-7 desktop:pb-0">
            <Image
              src={slide}
              alt={`Maple Ranch Gallery - Image ${index + 1}`}
              className="w-full h-full object-cover"
              width={1360}
              height={630}
              loading={index < 1 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden desktop:flex absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-black/90 border-2 border-green rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 shadow-lg desktop:hover:cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" color="#FFC100" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden desktop:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-black/90 border-2 border-green rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 shadow-lg desktop:hover:cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10" color="#FFC100" />
      </button>
    </div>
  );
};

export default HomePageGallerySlider;
