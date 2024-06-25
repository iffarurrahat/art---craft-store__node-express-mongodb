import PropTypes from "prop-types";
import Container from "../ui/Container";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = ({ slides }) => {
  return (
    <div className="font-roboto">
      <Swiper
        className="relative group"
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative bg-cover bg-center flex items-center justify-center h-[450px] sm:h-[550px] md:h-[700px] lg:h-screen"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay div with pointer-events-none */}
              <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
              {/* Text container with relative positioning and selectable text */}
              <div
                className="relative z-10 p-4  text-white"
                data-aos="fade-right"
              >
                <Container>
                  <p className="text-sm mb-1 md:mb-4 tracking-[8px] font-medium text-primary">
                    {slide.shortTitle}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5">
                    {slide.title}
                  </h2>
                  <p className="md:w-1/2 lg:w-2/3 leading-6 md:leading-8">
                    {slide.details}
                  </p>
                  <button className="flex items-center gap-3 border px-3 md:px-6 py-2 md:py-3 rounded mt-3 hover:bg-primary hover:border-primary duration-200 tracking-wider font-medium text-sm md:text-base">
                    See Details
                    <HiOutlineArrowNarrowRight />
                  </button>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="button-next-slide absolute bottom-2 left-[51%] lg:left-[47.5%] z-10  w-[30px] h-[30px] text-white grid place-items-center cursor-pointer border border-[#e5e5e5] rounded-full">
          <span className="button-next">
            <HiOutlineArrowNarrowRight />
          </span>
        </div>
        <div className="button-prev-slide absolute bottom-2 right-[51%] lg:right-[47.5%] z-10 w-[30px] h-[30px]  text-white grid place-items-center cursor-pointer border border-[#e5e5e5] rounded-full">
          <span className="button-prev">
            <HiOutlineArrowNarrowLeft />
          </span>
        </div>
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Slider;
