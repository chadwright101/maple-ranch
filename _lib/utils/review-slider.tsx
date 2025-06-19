"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  cssClasses?: string;
  data: { name: string; review: string }[];
}

const ReviewSlider = ({ cssClasses, data }: Props) => {
  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          className={cssClasses}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".swiper-review-button-prev-custom",
            nextEl: ".swiper-review-button-next-custom",
          }}
          loop
          style={
            {
              "--swiper-pagination-color": "#353C44",
              "--swiper-pagination-bullet-inactive-color": "#353C44",
              "--swiper-pagination-bullet-inactive-opacity": "0.8",
              "--swiper-navigation-color": "#353C44",
            } as React.CSSProperties
          }
        >
          {data.map((review, index) => (
            <SwiperSlide key={index} className="pb-7">
              <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 max-w-4xl leading-relaxed">
                  "{review.review}"
                </blockquote>
                <cite className="text-base font-semibold text-gray-900">
                  — {review.name}
                </cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="swiper-review-button-prev-custom hidden desktop:flex absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-blue/90 border-2 border-green rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 shadow-lg desktop:hover:cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" color="#FFC100" />
      </button>
      <button
        className="swiper-review-button-next-custom hidden desktop:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-blue/90 border-2 border-green rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 shadow-lg desktop:hover:cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10" color="#FFC100" />
      </button>
    </div>
  );
};

export default ReviewSlider;
