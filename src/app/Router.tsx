import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import MatchDetailPage from "../pages/MatchDetailPage/MatchDetailPage";
import StatsPage from "../pages/StatsPage/StatsPage";
import PlayersTeamsPage from "../pages/PlayersTeamsPage/PlayersTeamsPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import Sidebar from "../shared/layout/Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const noSidebarPaths = ["/signin", "/signup"];
  const hideSidebar = noSidebarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
};

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/match/:id" element={<MatchDetailPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/players-teams-stats" element={<PlayersTeamsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
