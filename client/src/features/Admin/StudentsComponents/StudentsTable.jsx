import { useMediaQuery } from "react-responsive";
import TableHeader from "./TableHeader";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { useEffect } from "react";
export default function StudentsTable({
  students,
  setStudents,
  setMeta,
  page,
  query,
  meta,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const Token = sessionStorage.getItem("Token");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/api/v1/students?page=${page}&search=${query}`,
        {
          headers: { Authorization: Token },
        },
      );

      const Data = await response.json();
      setStudents(Data.data.data);
      setMeta(Data.data.meta);
    }
    fetchData();
  }, [page, query]);

  return (
    <div
      className="
          mx-auto
          mt-6
          backdrop-blur-xl
          rounded-[30px]
          overflow-hidden
        "
    >
      {/* Table Header */}
      <TableHeader />

      {isDesktop ? (
        <DesktopLayout students={students} meta={meta} />
      ) : (
        <MobileLayout students={students} />
      )}
    </div>
  );
}
