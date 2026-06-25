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
  setErrorMessage,
  setLoader,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const Token = sessionStorage.getItem("Token");

  useEffect(() => {
    setLoader(true);
    try {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:5000/api/v1/students?page=${page}&search=${query}`,
          {
            headers: { Authorization: Token },
          },
        );

        const Data = await response.json();
        setStudents(Data?.data?.data);
        setMeta(Data?.data?.meta);

        if (!response.ok) {
          setErrorMessage(Data.message);
        }
      }
      fetchData();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something is wrong");
    } finally {
      setLoader(false);
    }
  }, [page, query]);

  function handleStatusChange(id, newStatus) {
    const changeStatus = newStatus === "active" ? "inactive" : "active";
    setStudents(
      students.map((student) =>
        student._id === id
          ? { ...student, academicStatus: changeStatus }
          : student,
      ),
    );
  }

  function handleChangePaymentStatus(id, newStatus) {
    const changeStatus = newStatus === "paid" ? "unpaid" : "paid";
    setStudents(
      students.map((student) =>
        student._id === id
          ? { ...student, financialStatus: changeStatus }
          : student,
      ),
    );
  }

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
        <DesktopLayout
          students={students}
          handleStatusChange={handleStatusChange}
          handleChangePaymentStatus={handleChangePaymentStatus}
          setErrorMessage={setErrorMessage}
          setLoader={setLoader}
        />
      ) : (
        <MobileLayout students={students} />
      )}
    </div>
  );
}
