export default function User({ id, name, age }) {
  return (
    <>
      <h2>User Basic Information</h2>
      <ul>
        <li>id : {id}</li>
        <li>name : {name}</li>
        <li>age : {age}</li>
      </ul>
    </>
  );
}
