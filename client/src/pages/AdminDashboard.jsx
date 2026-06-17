import Sidebar from "../components/Sidebar";
import Logo from "../features/Admin/AdminDashboardComponent/Logo";
import Navbar from "../features/Admin/AdminDashboardComponent/Navbar";
import BottomCard from "../features/Admin/AdminDashboardComponent/BottomCard";
import TopBar from "../features/Admin/AdminDashboardComponent/TopBar";
import StatS from "../features/Admin/AdminDashboardComponent/StatS";
import Content from "../features/Admin/AdminDashboardComponent/Content";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
      {/* Sidebar */}
      <Sidebar>
        <Logo />
        <Navbar />
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
