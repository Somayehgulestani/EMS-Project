export default function useChangeAcademicStatus({
  fetchData,
  handleStatusChange,
  setLoader,
  setErrorMessage,
}) {
  const token = sessionStorage.getItem("Token");

  async function changeAcademicStatus(id, currentStatus) {
    setLoader(true);

    const changeStatus = currentStatus === "active" ? "inactive" : "active";

    handleStatusChange(id, changeStatus);

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/students/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            academicStatus: changeStatus,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      await fetchData();

      return data;
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  }

  return { changeAcademicStatus };
}
