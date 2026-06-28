import { createContext, useState } from "react";

const SingleTeacherContext = createContext();

function SingleTeacherContextProvider({ children }) {
  const [singleTeacher, setSingleTeacher] = useState({});

  return (
    <SingleTeacherContext.Provider value={{ singleTeacher, setSingleTeacher }}>
      {children}
    </SingleTeacherContext.Provider>
  );
}

export { SingleTeacherContext, SingleTeacherContextProvider };
