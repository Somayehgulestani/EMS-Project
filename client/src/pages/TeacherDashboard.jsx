import Sidebar from "../components/Sidebar";
import BottomCard from "../features/Teacher/TeacherDashboardComponent/BottomCard";
import Content from "../features/Teacher/TeacherDashboardComponent/Content";
import Logo from "../features/Teacher/TeacherDashboardComponent/Logo";
import Navbar from "../features/Teacher/TeacherDashboardComponent/Navbar";
import StatS from "../features/Teacher/TeacherDashboardComponent/StatS";
import TopBar from "../features/Teacher/TeacherDashboardComponent/TopBar";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
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
