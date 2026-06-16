import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Logo from "../features/Admin/AdminDashboardComponent/Logo";
import Navbar from "../features/Admin/AdminDashboardComponent/Navbar";
import BottomCard from "../features/Admin/AdminDashboardComponent/BottomCard";
import TopBar from "../features/Admin/AdminDashboardComponent/TopBar";
import StatS from "../features/Admin/AdminDashboardComponent/StatS";
import Content from "../features/Admin/AdminDashboardComponent/Content";

export default function AdminDashboard() {
  const location = useLocation();
  const token = location.state;
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
      {/* Sidebar */}
      <Sidebar>
        <Logo />
        <Navbar token={token} />
        <BottomCard />
      </Sidebar>

      {/* Main */}
      <main className="flex-1 p-4 sm:p-5">
        <TopBar />
        <StatS />
        <Content />
      </main>
    </div>
  );
}
