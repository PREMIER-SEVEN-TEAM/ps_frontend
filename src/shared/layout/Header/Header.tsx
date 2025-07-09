import React from "react";
import { useLocation } from "react-router-dom";
import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";
import { InputBox } from "../../ui/InputBox";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Dashboard", subtitle: "Welcome to Premier 7" },
  "/match-schedule": {
    title: "경기일정",
    subtitle: "다가오는 경기 일정을 확인하세요!",
  },
  "/players-teams-stats": {
    title: "선수/팀 통계",
    subtitle: "선수들과 팀의 통계를 한눈에 확인하세요!",
  },
  "/stats": {
    title: "예측 통계",
    subtitle: "전체 예측 정확도를 확인해보세요!",
  },
};

export const Header: React.FC = () => {
  const location = useLocation();
  const { title, subtitle } = pageTitles[location.pathname] || {
    title: "페이지",
    subtitle: "",
  };

  return (
    <header className="w-full bg-[#17161e] text-white flex items-center justify-between pl-75 pr-5 py-4">
      {/* 왼쪽: 타이틀 */}
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
      </div>

      {/* 오른쪽: 검색창 + 아이콘들 + 프로필 */}
      <div className="flex items-center gap-10">
        <div className="w-[300px]">
          <InputBox
            placeholder="Search here..."
            icon={<FaSearch />}
            iconPosition="right"
            className="text-sm"
          />
        </div>
        <FaEnvelope className="text-lg text-white" />
        <FaBell className="text-lg text-white" />
        <div className="w-9 h-9 rounded-full bg-gray-400" />
      </div>
    </header>
  );
};
