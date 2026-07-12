import { useContext } from "react";
import { EmployeeContext } from "../utils/context";
import { useState } from "react";

export default function Employee() {
  const employee = useContext(EmployeeContext); // Access context data
  const [readingMode, setReadingMode] = useState(true);

  return (
    <>
      <br />
      <br />
      {readingMode && (
        <>
          <b>Employee Details</b>
          <ul>
            <li>Name: {employee.name}</li>
            <li>Age: {employee.age}</li>
            <li>aboutMe: {employee.aboutMe}</li>
          </ul>
          <button
            onClick={() => {
              setReadingMode(false);
            }}
          >
            Edit Employee
          </button>
        </>
      )}

      {!readingMode && (
        <>
          <p>
            <label htmlFor="username">Enter your name</label>&nbsp;&nbsp;
            <input
              type="text"
              id="username"
              value={employee.name}
              onChange={(event) => {
                employee.updateEmployeeDetails((currentEmp) => {
                  return { ...currentEmp, name: event.target.value };
                });
              }}
            />{" "}
          </p>

          <p>
            <label htmlFor="age">Enter your age</label>&nbsp;&nbsp;
            <input
              type="text"
              id="age"
              value={employee.age}
              onChange={(event) => {
                employee.updateEmployeeDetails((currentEmp) => {
                  return { ...currentEmp, age: event.target.value };
                });
              }}
            />
          </p>

          <p>
            <label htmlFor="aboutMe">About Yourself</label>&nbsp;&nbsp;
            <textarea
              type="text"
              id="aboutMe"
              rows="5"
              cols="15"
              value={employee.aboutMe}
              onChange={(event) => {
                employee.updateEmployeeDetails((currentEmp) => {
                  return { ...currentEmp, aboutMe: event.target.value };
                });
              }}
            />
          </p>

          <button
            onClick={(event) => {
              setReadingMode(true);
            }}
          >
            Save Employee
          </button>
        </>
      )}
    </>
  );
}
