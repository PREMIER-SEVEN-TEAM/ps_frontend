import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../assets/images/ImageCarousel1.jpg";
import Image2 from "../../assets/images/ImageCarousel2.jpg";
import Image3 from "../../assets/images/ImageCarousel3.jpg";
import Image4 from "../../assets/images/ImageCarousel4.jpg";

const images = [Image1, Image2, Image3, Image4];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovered = useRef(false); // 마우스가 올라가 있는 상태 추적

  // 타이머 시작 함수
  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
  };

  // 타이머 정지 함수
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 마운트 시 타이머 시작
  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  // 이미지 수동 클릭 시 타이머 리셋
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    stopTimer();
    startTimer(); // 타이머 리셋
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      onMouseEnter={() => {
        isHovered.current = true;
        stopTimer();
      }}
      onMouseLeave={() => {
        isHovered.current = false;
        startTimer();
      }}
    >
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

      {/* 하단 오른쪽 dot 네비게이션 */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {images.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
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
