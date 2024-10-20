import { Box } from "@mui/material";
import Countries from "./components/Countries";
import MultiSelectCountries from "./components/MultiSelectCountries";
import MapCountryObjects from "./components/MapCountryObjects";
import FormControlLabel from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        margin: 10,
        width: "100vw",
      }}
    >
      <Countries />
      <MultiSelectCountries />
      <MapCountryObjects />
    </Box>
  );
}

export default App;
