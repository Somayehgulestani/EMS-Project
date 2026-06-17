import Searchbar from "../features/Admin/UsersComponents/Searchbar";
import UsersTable from "../features/Admin/UsersComponents/UsersTable";

export default function UsersManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] p-4 sm:p-6">
      <Searchbar />

      {/* Users Table */}
      <UsersTable />
    </div>
  );
}
