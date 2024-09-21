function EmployeeBasicDetails() {
  return (
    <div>
      <h2>Employee Name: Rama Krishan</h2>
      <h3>Position: Software Engineer</h3>
      <h3>Email: krishna@example.com</h3>
    </div>
  );
}

function Address() {
  return (
    <div>
      <h3>Address:</h3>
      <p>Chowdeswari Street, Bangalore</p>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h3>Hobbies:</h3>
      <ul>
        <li>Reading</li>
        <li>Cycling</li>
        <li>Cooking</li>
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h3>Experience:</h3>
      <ul>
        <li>Company A: 2018 - Present (Software Engineer)</li>
        <li>Company B: 2015 - 2018 (Junior Developer)</li>
      </ul>
    </div>
  );
}

export default function EmployeeProfile() {
  return (
    <div>
      <EmployeeBasicDetails />
      <Address />
      <Hobbies />
      <Experience />
    </div>
  );
}
