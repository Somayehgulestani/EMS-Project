import { useContext } from "react";
import { TeachersContext } from "../../context/TeachersManagementContext";

export default function useTeacherFetchData({
  setLoader,
  setErrorMessage,
  setMeta,
  page,
  query,
}) {
  const Token = sessionStorage.getItem("Token");
  const { setTeachers } = useContext(TeachersContext);
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
  return { fetchData };
}
