import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Company from "./components/Company";
import { EmployeeContext } from "./utils/contexts";

const employee = {
  name: "Krishna",
  age: 38,
  aboutMe: "I am a Software Engineer with 13 Years Of Experience",
  department: "Research Wing",
  company: "Aerospace Research Limited",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeContext.Provider value={employee}>
      <Company />
    </EmployeeContext.Provider>
  </StrictMode>
);
