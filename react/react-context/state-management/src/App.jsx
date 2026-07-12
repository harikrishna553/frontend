import { useState } from "react";
import Company from "./components/Company";
import { EmployeeContext } from "./utils/context";

function App() {
  const [employee, updateEmployeeDetails] = useState({
    name: "Krishna",
    age: 38,
    aboutMe: "I am a Software Engineer with 13 Years Of Experience",
    department: "Research Wing",
    company: "Aerospace Research Limited",
  });

  return (
    <>
      <EmployeeContext.Provider
        value={{ ...employee, updateEmployeeDetails: updateEmployeeDetails }}
      >
        <Company />
      </EmployeeContext.Provider>
    </>
  );
}

export default App;
