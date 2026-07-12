import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("IND");

  return (
    <Box
      sx={{
        margin: "10px",
        width: 250,
      }}
    >
      <TextField
        select
        fullWidth
        label="Select Your Favorite Country"
        value={country}
        onChange={(event) => {
          console.log(`User Selected : ${event.target.value}`);
          setCountry(event.target.value);
        }}
      >
        <MenuItem value="USA">United States Of America</MenuItem>
        <MenuItem value="CAN">Canada</MenuItem>
        <MenuItem value="GBR">United Kingdom</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
        <MenuItem value="DEU">Germany</MenuItem>
        <MenuItem value="FRA">France</MenuItem>
        <MenuItem value="IND">India</MenuItem>
        <MenuItem value="CHN">China</MenuItem>
        <MenuItem value="JPN">Japan</MenuItem>
        <MenuItem value="BRA">Brazil</MenuItem>
      </TextField>
    </Box>
  );
}

export default App;
