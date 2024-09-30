export default function Address({ city, state, country }) {
  return (
    <>
      <p>Address : </p>
      <address>
        {city},{state},{country}
      </address>
    </>
  );
}
