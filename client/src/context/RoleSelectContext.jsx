import { createContext, useState } from "react";

const RoleSelectContext = createContext();

function RoleSelectContextData({ children }) {
  const [selectedRole, setSelectedRole] = useState("");
  return (
    <RoleSelectContext.Provider value={{ selectedRole, setSelectedRole }}>
      {children}
    </RoleSelectContext.Provider>
  );
}
export { RoleSelectContext, RoleSelectContextData };
