import Header from "../features/Authenication/RoleSelectionComponent/Header";
import LoginSection from "../features/Authenication/RoleSelectionComponent/LoginSection";
import RoleCards from "../features/Authenication/RoleSelectionComponent/RoleCards";
import AdminAccess from "../features/Authenication/RoleSelectionComponent/AdminAccess";

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] flex items-center justify-center px-4 py-10">
      <div className="w-2/4 max-w-6xl">
        <Header />
        <RoleCards />
        <LoginSection />
        <AdminAccess />
      </div>
    </div>
  );
}
