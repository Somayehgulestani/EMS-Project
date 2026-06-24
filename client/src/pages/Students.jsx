import { useState } from "react";
import Buttons from "../features/Admin/StudentsComponents/Buttons";
import Searchbar from "../features/Admin/StudentsComponents/Searchbar";
import Statistics from "../features/Admin/StudentsComponents/Statistics";
import StudentsTable from "../features/Admin/StudentsComponents/StudentsTable";

export default function StudentsListUI() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [query, setQuery] = useState("");
  console.log(students);
  console.log(meta);
  console.log(query);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] p-4 sm:p-6">
      <Searchbar setQuery={setQuery} />
      <Statistics meta={meta} ssetQuery={setQuery} />
      <StudentsTable
        students={students}
        setStudents={setStudents}
        meta={meta}
        setMeta={setMeta}
        page={page}
        setPage={setPage}
        query={query}
      />
      <Buttons page={page} setPage={setPage} meta={meta} />
    </div>
  );
}
