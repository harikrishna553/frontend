import { useContext } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../utils/contexts";

export default function Department() {
  const employee = useContext(EmployeeContext);
  return (
    <>
      <h2>Department : {employee.department}</h2>
      <Employee employee={employee} />
    </>
  );
}
