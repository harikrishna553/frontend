import { useContext, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../utils/context";

export default function Department() {
  const employee = useContext(EmployeeContext);
  const [readingMode, setReadingMode] = useState(true);

  return (
    <>
      <br />
      <br />
      {readingMode && <b>Department : {employee.department} </b>}
      {!readingMode && (
        <div>
          <label htmlFor="department">Enter new department name : </label>
          <input
            type="text"
            id="department"
            value={employee.department}
            onChange={(event) => {
              employee.updateEmployeeDetails({
                ...employee,
                department: event.target.value,
              });
            }}
          />
        </div>
      )}

      {readingMode ? (
        <button
          onClick={() => {
            setReadingMode(false);
          }}
        >
          Edit Department
        </button>
      ) : (
        <button
          onClick={() => {
            setReadingMode(true);
          }}
        >
          Save Department
        </button>
      )}

      <Employee employee={employee} />
    </>
  );
}
