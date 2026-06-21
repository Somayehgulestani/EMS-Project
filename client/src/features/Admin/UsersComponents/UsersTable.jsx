import { useEffect } from "react";
import TableHeader from "./TableHeader";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import Buttons from "./Buttons";
import { useMediaQuery } from "react-responsive";

export default function UsersTable({
  users,
  setUsers,
  page,
  meta,
  setPage,
  setMeta,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  const Token = sessionStorage.getItem("Token");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/api/v1/users?page=${page}`,
        {
          headers: { Authorization: Token },
        },
      );

      const data = await response.json();
      console.log(data.data);
      setMeta(data.meta);

      setUsers(data.data);
    }
    fetchData();
  }, [page]);

  return (
    <>
      <div
        className="
          mx-auto
          mt-6
          bg-white/55
          backdrop-blur-xl
          border
          border-white/40
          rounded-[30px]
          shadow-[0_15px_40px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >
        {/* Table Header */}
        <TableHeader />

        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="
            px-4
            sm:px-6
            py-5
            border-b
            border-[#EFE5DE]
            hover:bg-white/30
            transition-all
          
          "
            >
              {isDesktop ? (
                <DesktopLayout user={user} />
              ) : (
                <MobileLayout user={user} />
              )}
            </div>
          );
        })}
      </div>
      <Buttons page={page} meta={meta} setPage={setPage} />
    </>
  );
}
