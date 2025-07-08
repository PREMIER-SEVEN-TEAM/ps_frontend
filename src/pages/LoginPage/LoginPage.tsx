import React from "react";
import LoginForm from "./LoginForm";
import ImageCarousel from "./ImageCarousel";
import logo from "../../assets/images/PREMIER7.png";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen relative">
      {/* 좌측 상단 로고 */}
      <img
        src={logo}
        alt="Premier Seven Logo"
        onClick={handleLogoClick}
        className="absolute top-3 left-3 w-20 h-auto z-10 cursor-pointer"
      />
      {/* 좌측 로그인 폼 */}
      <div className="w-1/2 bg-[#17161E] flex flex-col justify-center items-center px-10">
        <LoginForm />
      </div>

      {/* 우측 이미지 캐러셀 */}
      <div className="w-1/2 relative">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default LoginPage;
