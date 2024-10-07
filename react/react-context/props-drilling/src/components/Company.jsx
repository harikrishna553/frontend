import Department from "./Department";

export default function Company({ employee }) {
  return (
    <>
      <h1>Company : {employee.company}</h1>
      <Department employee={employee} />
    </>
  );
}
