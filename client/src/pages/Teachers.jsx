import Searchbar from "../features/Admin/TeachersComponents/Searchbar";
import Buttons from "../features/Admin/TeachersComponents/Buttons";
import TeacherTable from "../features/Admin/TeachersComponents/TeacherTable";
import { useState } from "react";

export default function Teachers({ setLoader, setErrorMessage }) {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [query, setQuery] = useState("");
  console.log(Teachers);
  console.log(meta);
  console.log(query);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] p-4 sm:p-6 ">
      <Searchbar setQuery={setQuery} />

      <TeacherTable
        setMeta={setMeta}
        page={page}
        setPage={setPage}
        query={query}
        setErrorMessage={setErrorMessage}
        setLoader={setLoader}
      />

      <Buttons page={page} setPage={setPage} meta={meta} />
    </div>
  );
}
