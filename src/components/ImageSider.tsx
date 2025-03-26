import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount({currentIndex}) => {currentIndex} + 1);
  //   }, 1000);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
  //   }, 1000);
  //   console.log(`'dfdddddf' ${currentIndex}`);
  // },[currentIndex]);

  console.log(`'dfdf' ${currentIndex}`);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  var len = images[currentIndex].length;

  return (
    <div className="flex flex-col items-center justify-center gap-[13px]">
      <div className="relative w-full">
        <img
          src={
            images[currentIndex === 0 ? 2 : (currentIndex - 1) % images.length]
          }
          alt={`Slide ${currentIndex - 1}`}
          className="w-[236.77px] h-[181.55px] rounded-[21px] border-[1px] border-[#FFBB02]"
        />

        <button
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-[18px] h-[18px] font-[600] bg-[#69A94EA1] text-black  rounded-[6px] focus:outline-none flex justify-center items-center"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-[18px] h-[18px] font-[600] bg-[#69A94EA1] text-black  rounded-[6px] focus:outline-none flex justify-center items-center"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center gap-3">
        {images.map((_, index) => (
          <div
            className={`w-[5.82px] h-[5.82px] rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-[#69A94E]"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
