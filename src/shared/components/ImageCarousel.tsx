import React from "react";
import Image1 from "../../assets/images/ImageCarousel1.jpg";
import Image2 from "../../assets/images/ImageCarousel2.jpg";
import Image3 from "../../assets/images/ImageCarousel3.jpg";
import Image4 from "../../assets/images/ImageCarousel4.jpg";
import { useImageCarousel } from "../hooks/useImageCarousel";

const images = [Image1, Image2, Image3, Image4];

const ImageCarousel: React.FC = () => {
  const { currentIndex, goTo, start, stop } = useImageCarousel(
    images.length,
    10000
  );

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* 이미지 슬라이드 */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dot 네비게이션 */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {images.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                isActive ? "bg-[#AB54DB] w-4 h-4" : "bg-gray-400 w-3 h-3"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
