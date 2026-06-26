export default function useChangeAcademicStatus({
  fetchData,
  handleChangePaymentStatus,
  setLoader,
  setErrorMessage,
}) {
  const token = sessionStorage.getItem("Token");

  async function changePaymentStatus(id, currentStatus) {
    setLoader(true);

    const changeStatus = currentStatus === "paid" ? "unpaid" : "paid";

    (handleChangePaymentStatus, (id, changeStatus));

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
            financialStatus: changeStatus,
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

  return { changePaymentStatus };
}
