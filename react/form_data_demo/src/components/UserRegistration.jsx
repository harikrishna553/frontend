export default function UserRegistration() {
  function validateRegistrationForm(event) {

    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let username = formData.get("myName");
    let email = formData.get("myEmail");

    alert(`User '${username}' registered successfully against the email ${email}`);
  }

  return (
    <form method="POST" onSubmit={validateRegistrationForm}>
      <label htmlFor="name">Enter your name</label>
      <input id="name" name="myName" required /> <br /> <br />
      <label htmlFor="email">Enter your email</label>
      <input id="email" name="myEmail" type="email" required /> <br /> <br />
      <button type="submit">Register</button>
    </form>
  );
}
