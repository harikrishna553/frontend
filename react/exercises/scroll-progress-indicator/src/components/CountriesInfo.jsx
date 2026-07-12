import countryCapitals from "./countryCapitals.json";

export default function CountriesInfo() {
  return (
    <div className="countriesInfo">
      {countryCapitals.map((countryInfo, index) => (
        <ul key={countryInfo.key}>
          <li>{countryInfo.id}</li>
          <li>{countryInfo.country}</li>
          <li>{countryInfo.capital}</li>
        </ul>
      ))}
    </div>
  );
}
