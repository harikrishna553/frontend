import { useContext } from "react";
import Department from "./Department";
import { EmployeeContext } from "../utils/contexts";

export default function Company() {
  const employee = useContext(EmployeeContext);

  return (
    <EmployeeContext.Consumer>
      {(employee) => (
        <>
          <h1>Company : {employee.company}</h1>
          <Department employee={employee} />
        </>
      )}
    </EmployeeContext.Consumer>
  );
}
