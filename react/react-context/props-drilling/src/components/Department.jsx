import Employee from "./Employee";

export default function Department({ employee }) {
  return (
    <>
      <h2>Department : {employee.department}</h2>
      <Employee employee={employee} />
    </>
  );
}
