import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function App() {
  const [onOffState, setOnOffState] = useState("on");
  const [formatStates, setFormatStates] = useState(["bold", "underline"]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        columnGap: "20px",
        margin: "20px",
      }}
    >
      <ToggleButtonGroup
        value={onOffState}
        exclusive
        onChange={(event, selectedValue) => {
          if (selectedValue !== null) {
            console.log(`Selected Value is ${selectedValue}`);
            setOnOffState(selectedValue);
          }
        }}
      >
        <ToggleButton value="on" variant="contained">
          ON
        </ToggleButton>
        <ToggleButton value="off">OFF</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={formatStates}
        onChange={(event, selectedValues) => {
          if (selectedValues !== null) {
            console.log(`Selected Value is ${selectedValues}`);
            setFormatStates(selectedValues);
          }
        }}
      >
        <ToggleButton value="bold" variant="contained">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default App;
