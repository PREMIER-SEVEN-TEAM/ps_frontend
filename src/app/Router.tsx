// 라우팅 관련 라이브러리 및 페이지 컴포넌트 import
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import MatchDetailPage from "../pages/MatchDetailPage/MatchDetailPage";
import StatsPage from "../pages/StatsPage/StatsPage";
import PlayersTeamsPage from "../pages/PlayersTeamsPage/PlayersTeamsPage";
import MatchSchedulePage from "../pages/MatchSchedulePage/MatchSchedulePage";
import AdminPage from "../pages/AdminPage/AdminPage";

// 공통 레이아웃 컴포넌트 import
import Sidebar from "../shared/layout/Sidebar/Sidebar";
import { Header } from "../shared/layout/Header/Header";

// 토스트 알림 라이브러리 import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 조건부 className 처리를 위한 유틸
import clsx from "clsx";

// 전체 페이지 공통 레이아웃 컴포넌트
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation(); // 현재 경로(pathname)를 가져옴

  // 로그인, 회원가입 페이지에서는 사이드바와 헤더를 숨기기 위한 경로 설정
  const noSidebarPaths = ["/signin", "/signup"];

  // 현재 경로가 사이드바/헤더를 숨겨야 하는 경로인지 여부
  const hideLayout = noSidebarPaths.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-[#17161e]">
      {!hideLayout && <Sidebar />}
      <div className="flex flex-col flex-1">
        {!hideLayout && <Header />}
        {/* 메인 콘텐츠 영역 */}
        <main
          className={clsx("flex-1 overflow-auto", {
            // 로그인/회원가입 페이지가 아닐 경우 좌우 padding 적용
            "pl-75 pr-5": !hideLayout,
          })}
        >
          {children}
        </main>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

// 라우팅 설정 컴포넌트
const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {/* 로그인 및 회원가입 페이지 (레이아웃 제외 대상) */}
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* 주요 페이지들 */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/match-schedule" element={<MatchSchedulePage />} />
        <Route path="/match/:id" element={<MatchDetailPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/players-teams-stats" element={<PlayersTeamsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
