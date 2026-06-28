import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { useContext, useEffect } from "react";
import { TeachersContext } from "../../../context/TeachersContext";

export default function TeacherTable({
  setMeta,
  page,
  query,
  setErrorMessage,
  setLoader,
}) {
  const { Teachers, setTeachers } = useContext(TeachersContext);
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const Token = sessionStorage.getItem("Token");

  const fetchData = async () => {
    setLoader(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/instructors?page=${page}&search=${query}`,
        {
          headers: {
            Authorization: Token,
          },
        },
      );

      const Data = await response.json();

      if (!response.ok) {
        setErrorMessage(Data.message);
        return;
      }

      setTeachers(Data?.data?.data);
      setMeta(Data?.data?.meta);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something is wrong");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, page]);

  function handleStatusChange(id, newStatus) {
    const changeStatus = !newStatus;
    setTeachers(
      Teachers.map((Teacher) =>
        Teacher._id === id ? { ...Teacher, isActive: changeStatus } : Teacher,
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
      {isDesktop ? (
        <DesktopLayout
          Teachers={Teachers}
          handleStatusChange={handleStatusChange}
          fetchData={fetchData}
          setErrorMessage={setErrorMessage}
          setLoader={setLoader}
        />
      ) : (
        <MobileLayout />
      )}
    </div>
  );
}
