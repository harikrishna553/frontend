export default function EmployeeDetailsUsingForLoop() {
  let employees = [
    { id: 1, name: "Krishna", age: 34, hobbies: ["Playing Cricket", "Hockey"] },
    { id: 2, name: "Ram", age: 35 },
    { id: 3, name: "Chamu", age: 32, hobbies: ["Trekking", "Cooking"] },
    { id: 4, name: "Sailu", age: 36, hobbies: ["Reading", "Dancing"] },
  ];

  let itemList = [];

  for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    itemList.push(
      <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.age}</td>
        <td>
          <ul>
            {emp.hobbies &&
              emp.hobbies.map((hobby) => (
                <li key={`${emp.id}-${hobby}`}>{hobby}</li>
              ))}
          </ul>
        </td>
      </tr>
    );
  }
  return (
    <div>
      <h1>Employee Details Using for loop</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Hobbies</th>
          </tr>
        </thead>

        <tbody>{itemList}</tbody>
      </table>
    </div>
  );
}
