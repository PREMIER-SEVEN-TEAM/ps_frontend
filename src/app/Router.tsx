import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import MatchDetailPage from "../pages/MatchDetailPage/MatchDetailPage";
import StatsPage from "../pages/StatsPage/StatsPage";
import PlayersTeamsPage from "../pages/PlayersTeamsPage/PlayersTeamsPage";
import AdminPage from "../pages/AdminPage/AdminPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/match/:id" element={<MatchDetailPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/players-teams-stats" element={<PlayersTeamsPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
