import { useContext } from "react";
import Department from "./Department";
import { EmployeeContext } from "../utils/context";
import { useState } from "react";

export default function Company() {
  const employee = useContext(EmployeeContext);
  const [readingMode, setReadingMode] = useState(true);

  return (
    <>
      {readingMode && <b>Company : {employee.company} </b>}
      {!readingMode && (
        <div>
          <label htmlFor="company">Enter new Company name : </label>
          <input
            type="text"
            id="company"
            value={employee.company}
            onChange={(event) => {
              employee.updateEmployeeDetails({
                ...employee,
                company: event.target.value,
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
          Edit Company
        </button>
      ) : (
        <button
          onClick={() => {
            setReadingMode(true);
          }}
        >
          Save Company
        </button>
      )}

      <Department employee={employee} />
    </>
  );
}
