import { Autocomplete, TextField, Box, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function Countries() {
  const [country, setCountry] = useState(null);

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
        label="Select Your Favorite Country"
        labelPlacement="start"
        control={
          <Autocomplete
            sx={{
              margin: 2,
              minWidth: 250,
            }}
            options={countries}
            renderInput={(params) => (
              <TextField {...params} label="Choose Your Favorite Country" />
            )}
            noOptionsText="No options available"
            freeSolo
            value={country}
            onChange={(event, selectedCountry) => {
              console.log(`Country Selected : ${selectedCountry}`);
              setCountry(selectedCountry);
            }}
          />
        }
      />
    </Box>
  );
}
