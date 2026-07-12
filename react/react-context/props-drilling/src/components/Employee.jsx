export default function Employee({ employee }) {
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
