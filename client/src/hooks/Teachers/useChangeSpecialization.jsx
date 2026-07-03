export default function useChangeAcademicStatus({
  setLoader,
  setErrorMessage,
  inputValue,
  handleStatusChange,
}) {
  const token = sessionStorage.getItem("Token");

  async function changeSpecializationStatus(id) {
    setLoader(true);

    handleStatusChange(id, inputValue);
    if (inputValue.trim() === "") return;
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/instructors/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            specialization: inputValue,
          }),
        },
      );

      const data = await response.json();
      handleStatusChange(id, inputValue);
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  }

  return { changeSpecializationStatus };
}
