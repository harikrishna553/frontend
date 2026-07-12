import { EmployeeContext } from "../utils/contexts";
import { useContext } from "react";

export default function Employee() {
  const employee = useContext(EmployeeContext); // Access context data

  return (
    <>
      <h3>Employee Details</h3>
      <ul>
        <li>Name: {employee.name}</li>
        <li>Age: {employee.age}</li>
        <li>aboutMe: {employee.aboutMe}</li>
      </ul>
    </>
  );
}
