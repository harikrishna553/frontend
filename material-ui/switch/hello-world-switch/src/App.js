import { Box, Switch, FormControlLabel, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Common styles for Box component, switching based on darkMode state
  const boxStyles = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 1.5s, color 1.5s", // Add smooth transitions
  };

  return (
    <Box style={boxStyles}>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((currentVal) => !currentVal)}
            color="primary"
            aria-label="Toggle dark mode"
          />
        }
        label={darkMode ? "Regular Mode" : "Dark Mode"}
      />
    </Box>
  );
}

export default App;
