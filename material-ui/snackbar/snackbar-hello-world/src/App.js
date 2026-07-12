import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function App() {
  const [open, setOpen] = useState(false);

  // Open the Snackbar
  const handleClick = () => {
    setOpen(true);
  };

  // Close the Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return; // Avoid closing when clicking outside
    }
    setOpen(false);
  };

  return (
    <Stack
      sx={{
        margin: 10,
        width: 150,
      }}
    >
      <Button variant="outlined" onClick={handleClick}>
        Resend Otp
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          OTP sent successfully!!!
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default App;
