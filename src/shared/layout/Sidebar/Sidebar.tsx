import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuCalendarDays,
  LuUsers,
  LuChartColumn,
} from "react-icons/lu";
import logo from "../../../assets/images/PREMIER7.png";

const menuItems = [
  { icon: <LuLayoutDashboard />, label: "Dashboard", path: "/" },
  { icon: <LuCalendarDays />, label: "경기일정", path: "/match/:id" },
  { icon: <LuUsers />, label: "선수/팀 통계", path: "/players-teams-stats" },
  { icon: <LuChartColumn />, label: "예측 통계", path: "/stats" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[95vh] w-64 bg-[#1F1E26] border border-[#2F2A36] rounded-xl ml-3 mt-3 p-1 flex flex-col shadow-md">
      {/* 로고 + 텍스트 */}
      <div className="flex items-center mb-3 px-1">
        <img
          src={logo}
          alt="Premier 7 Logo"
          className="w-18 h-18 rounded-md cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-col cursor-default">
          <span className="text-white text-xl font-semibold tracking-wide">
            PREMIER 7
          </span>
          <span className="text-xs text-gray-400 leading-snug">
            prediction community
          </span>
        </div>
      </div>

      {/* 메뉴 리스트 */}
      <nav className="flex flex-col gap-2 p-3">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 text-gray-300 hover:text-[#AB54DB] hover:bg-[#AB54DB]/20 px-4 py-3 rounded-lg transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* 푸터 */}
      <div className="mt-auto px-3 pt-4 pb-2 border-t border-[#2F2A36] text-xs text-gray-500">
        <p className="text-center font-semibold text-gray-400 mb-1">
          PREMIER SEVEN
        </p>
        <p className="text-center">© 2025 Premier 7. All rights reserved.</p>
        <p className="text-center mt-1">
          Built for football fans, by football fans ⚽
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
