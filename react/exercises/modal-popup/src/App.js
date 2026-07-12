import UserDetails from "./components/UserDetails";

const user = {
  name: "Krishna",
  age: 35,
  email: "krishna@abc.com",
};

const address = {
  street: "Chowdeswari Street",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
};

function App() {
  return <UserDetails user={user} address={address} />;
}

export default App;
