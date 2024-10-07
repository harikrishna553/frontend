import React from "react";

// Define a context and give it an initial value
export const EmployeeContext = React.createContext({
  name: "no_name",
  age: 0,
  aboutMe: "",
  department: "",
  company: "",
  updateEmployeeDetails: () => {},
});
