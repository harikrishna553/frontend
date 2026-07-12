import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

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
        label="Select Your Favorite Countries"
        value={countries}
        onChange={(event) => {
          console.log(`User Selected : ${event.target.value}`);
          setCountries(event.target.value);
        }}
        slotProps={{
          select: {
            multiple: true,
          },
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
