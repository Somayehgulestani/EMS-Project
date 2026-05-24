import Sidebar from "../components/Sidebar";
import BottomCard from "../features/Students/StudentsDashboardComponent/BottomCard";
import Content from "../features/Students/StudentsDashboardComponent/Content";
import Logo from "../features/Students/StudentsDashboardComponent/Logo";
import Navbar from "../features/Students/StudentsDashboardComponent/Navbar";
import StatS from "../features/Students/StudentsDashboardComponent/StatS";
import TopBar from "../features/Students/StudentsDashboardComponent/TopBar";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
      {/* Sidebar */}
      <Sidebar>
        <Logo />
        <Navbar />
        <BottomCard />
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-5">
        <TopBar />
        <StatS />
        <Content />
      </main>
    </div>
  );
}
