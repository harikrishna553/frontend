export function WelcomeMessage(props) {
  const isLoggedIn = props.loggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export function WelcomeMessageUsingTernary(props) {
  return props.loggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}

export function GreetUser(props) {
  const isLoggedIn = props.loggedIn;

  return (
    <div>
      {isLoggedIn ? <h1>Hello, User!</h1> : <h1>Please log in.</h1>}
      {isLoggedIn && <p>You have new notifications!</p>}
    </div>
  );
}
