function EmployeeBasicDetails({ name, position, email }) {
    return (
      <div>
        <h2>Employee Name: {name}</h2>
        <h3>Position: {position}</h3>
        <h3>Email: {email}</h3>
      </div>
    );
  }
  
  function Address(props) {
    return (
      <div>
        <h3>Address:</h3>
        <p>{props.street}, {props.city}</p>
      </div>
    );
  }
  
  function Hobbies({ hobbies }) {
    return (
      <div>
        <h3>Hobbies:</h3>
        <ul>
          {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
      </div>
    );
  }
  
  function Experience({ experiences }) {
    return (
      <div>
        <h3>Experience:</h3>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default function EmployeeProfile(employee) {
    return (
      <div>
        <EmployeeBasicDetails 
          name={employee.name} 
          position={employee.position} 
          email={employee.email} 
        />
        <Address 
          street={employee.address.street} 
          city={employee.address.city} 
        />
        <Hobbies hobbies={employee.hobbies} />
        <Experience experiences={employee.experiences} />
      </div>
    );
  }
  