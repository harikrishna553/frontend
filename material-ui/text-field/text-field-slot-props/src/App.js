import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: 20,
        columnGap: 20,
      }}
    >
      <TextField
        label="Enter Password"
        type={showPassword ? "text" : "password"}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        placeholder="Enter your height here"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">ft</InputAdornment>
            ),
          },
        }}
      />

      <TextField
        label="Enter Your Weight"
        slotProps={{
          input: {
            endAdornment: <InputAdornment>kg</InputAdornment>,
          },
        }}
      />
    </div>
  );
}

export default App;
