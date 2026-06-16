import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/v1/users");
    }
  }, []);

  return (
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

      {/* User Row */}
      <div
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
        {/* Desktop */}
        <div className="hidden xl:grid grid-cols-7 gap-4 items-center">
          {/* User */}
          <div className="flex items-center gap-3">
            <div
              className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-[#D7BDB0]/35
                  flex
                  items-center
                  justify-center
                  text-[#4B403A]
                  font-bold
                "
            >
              S
            </div>

            <div>
              <p className="text-sm font-semibold text-[#4B403A]">
                Somayeh Gulistani
              </p>

              <p className="text-xs text-[#7A6E66]">Active User</p>
            </div>
          </div>

          {/* ID */}
          <div>
            <p className="text-sm font-medium text-[#4B403A]">#EMS-1024</p>
          </div>

          {/* Email */}
          <p className="text-sm text-[#6D625B] break-all">
            somayeh@example.com
          </p>

          {/* Role */}
          <div>
            <span
              className="
                  px-3
                  py-1.5
                  rounded-xl
                  bg-[#F8F5F2]
                  border
                  border-[#E3D5CA]
                  text-xs
                  font-medium
                  text-[#4B403A]
                "
            >
              Teacher
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

            <span className="text-sm text-[#4B403A]">Active</span>
          </div>

          {/* Date */}
          <div>
            <p className="text-sm text-[#4B403A]">12 Jun 2026</p>

            <p className="text-xs text-[#7A6E66] mt-1">08:35 PM</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <button
              className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[#EDEEE9]
                  border
                  border-[#D6CCC2]
                  text-[#4B403A]
                  text-xs
                  font-semibold
                  hover:bg-[#F8F5F2]
                  transition-all
                "
            >
              Add To Panel
            </button>

            <button
              className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[#D7BDB0]
                  hover:bg-[#CDB1A3]
                  text-[#4B403A]
                  text-xs
                  font-semibold
                  transition-all
                "
            >
              Disable
            </button>
          </div>
        </div>

        {/* Mobile Card */}
        <div className="xl:hidden">
          <div
            className="
                bg-[#F8F5F2]
                border
                border-[#E3D5CA]
                rounded-3xl
                p-4
                space-y-4
              "
          >
            {/* Top */}
            <div className="flex items-center gap-3">
              <div
                className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-[#D7BDB0]/35
                    flex
                    items-center
                    justify-center
                    text-[#4B403A]
                    font-bold
                  "
              >
                S
              </div>

              <div>
                <p className="text-sm font-semibold text-[#4B403A]">
                  Somayeh Gulistani
                </p>

                <p className="text-xs text-[#7A6E66] mt-1">
                  somayeh@example.com
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[#7A6E66]">User ID</p>
                <p className="text-sm font-medium text-[#4B403A] mt-1">
                  #EMS-1024
                </p>
              </div>

              <div>
                <p className="text-xs text-[#7A6E66]">Role</p>

                <p className="text-sm font-medium text-[#4B403A] mt-1">
                  Teacher
                </p>
              </div>

              <div>
                <p className="text-xs text-[#7A6E66]">Status</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>

                  <p className="text-sm font-medium text-[#4B403A]">Active</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-[#7A6E66]">Registered</p>

                <p className="text-sm font-medium text-[#4B403A] mt-1">
                  12 Jun 2026
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-1">
              <button
                className="
                    w-full
                    py-2.5
                    rounded-2xl
                    bg-[#EDEEE9]
                    border
                    border-[#D6CCC2]
                    text-[#4B403A]
                    text-sm
                    font-semibold
                  "
              >
                Add To Panel
              </button>

              <button
                className="
                    w-full
                    py-2.5
                    rounded-2xl
                    bg-[#D7BDB0]
                    text-[#4B403A]
                    text-sm
                    font-semibold
                  "
              >
                Disable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
