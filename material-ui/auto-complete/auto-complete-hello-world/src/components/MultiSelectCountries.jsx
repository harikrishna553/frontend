import { Autocomplete, TextField, Box, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function MultiSelectCountries() {
  const [countriesSelected, setCountries] = useState([]);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
    "China",
    "Brazil",
    "South Africa",
    "Italy",
    "Mexico",
    "Russia",
    "South Korea",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "New Zealand",
  ];

  return (
    <Box>
      <FormControlLabel
        label="Select Your Favorite Countries"
        labelPlacement="start"
        control={
          <Autocomplete
            sx={{
              margin: 2,
              minWidth: 250,
            }}
            options={countries}
            renderInput={(params) => (
              <TextField {...params} label="Choose Your Favorite Countries" />
            )}
            multiple
            freeSolo
            value={countriesSelected}
            onChange={(event, selectedCountries) => {
              console.log(`Country Selected : ${selectedCountries}`);
              setCountries(selectedCountries);
            }}
          />
        }
      />
    </Box>
  );
}
