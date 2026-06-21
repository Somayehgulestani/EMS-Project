import Searchbar from "../features/Admin/UsersComponents/Searchbar";
import UsersTable from "../features/Admin/UsersComponents/UsersTable";
import Statisics from "../features/Admin/UsersComponents/Statistics";
import { useState } from "react";

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  console.log(users);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] p-4 sm:p-6">
      <Searchbar />
      <Statisics meta={meta} />
      <UsersTable
        meta={meta}
        page={page}
        setMeta={setMeta}
        setPage={setPage}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}
