import { useContext } from "react";
import { TeachersContext } from "../../context/TeachersManagementContext";

export default function useGetTeacherById({
  setErrorMessage,
  setLoader,
  Teachers,
}) {
  // const [singleTeacher, setSingleTeacher] = useState({});
  // console.log(singleTeacher[0]);
  const { singleTeacher, setSingleTeacher } = useContext(TeachersContext);
  console.log(singleTeacher);

  const token = sessionStorage.getItem("Token");

  function handleGetSingleTeacher(id) {
    setSingleTeacher(Teachers.filter((Teacher) => Teacher._id === id));
  }

  async function handleViewProfile(id) {
    setLoader(true);
    handleGetSingleTeacher(id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/instructors/${id}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      setSingleTeacher(data.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  }
  return { handleViewProfile, singleTeacher };
}
