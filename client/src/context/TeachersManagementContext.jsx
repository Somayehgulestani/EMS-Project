import { createContext, useState } from "react";

const TeachersContext = createContext();

function TeachersManagmentContextProvider({ children }) {
  const [Teachers, setTeachers] = useState([]);
  const [singleTeacher, setSingleTeacher] = useState({});

  return (
    <TeachersContext.Provider
      value={{ Teachers, setTeachers, singleTeacher, setSingleTeacher }}
    >
      {children}
    </TeachersContext.Provider>
  );
}

export { TeachersContext, TeachersManagmentContextProvider };
