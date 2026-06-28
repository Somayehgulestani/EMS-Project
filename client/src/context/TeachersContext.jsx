import { createContext, useState } from "react";

const TeachersContext = createContext();

function TeachersContextProvider({ children }) {
  const [Teachers, setTeachers] = useState([]);

  return (
    <TeachersContext.Provider value={{ Teachers, setTeachers }}>
      {children}
    </TeachersContext.Provider>
  );
}

export { TeachersContext, TeachersContextProvider };
