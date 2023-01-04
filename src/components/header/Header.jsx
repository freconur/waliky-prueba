import React, { useState } from "react";
import { HEADER_IMAGE } from "../../imagesLink/headerImages";
import { IMAGES_LINK } from "../../imagesLink/images.link";
import "./header.css";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

const Header = () => {
  const slides = [
    {
      url: IMAGES_LINK.HEADER,
    },
    {
      url: HEADER_IMAGE.HEADER_PROMOTION_COLLAGE,
    },
    {
      url: HEADER_IMAGE.HEADER_PRUEBASS,
    },
    {
      url: HEADER_IMAGE.HEADER_PRUEBASS_2,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlider = currentIndex === slides.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    // <div className="max-w-[100%] h-[350px] w-full m-auto py-16 px-4 relative">
    // <div className="h-[420px] w-full m-auto relative">
    <div className="mobile:w-[420px] mobile:h-[420px] tablet:w-[1024px] tablet:h-[1024px] fullhd:h-[648px] w-full h-[450px] m-auto relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        // className=" w-full h-full rounded2xl bg-center bg-cover duration-500"
        className=" mobile:w-[420px] mobile:h-[420px] tablet:w-[1024px] tablet:h-[1024px] fullhd:w-full fullhd:h-[648px] w-full h-[450px] rounded2xl bg-cover bg-no-repeat bg-center duration-500"
      ></div>
      {/* ////prueba con img
      <div>
        <img src={} alt="" />
      </div>
      ////prueba con img */}

      {/* <div onClick={prevSlider}>
        <BsChevronCompactLeft
          size={30}
          className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      </div>
      <div onClick={nextSlider}>
        <BsChevronCompactRight
          size={30}
          className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, indexSlide) => (
          <div
            onClick={() => goToSlide(indexSlide)}
            key={indexSlide}
            className="text-2xl cursor pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export { Header };
