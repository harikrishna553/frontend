import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { Button, Stack } from "@mui/material";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert((prev) => !prev);
  };

  return (
    <Stack
      sx={{
        width: 300,
        margin: 10,
      }}
    >
      <Button variant="contained" onClick={handleToggleAlert}>
        {showAlert ? "Hide Alert" : "Show Alert"}
      </Button>
      {showAlert && (
        <Alert
          severity="success"
          onClose={() => setShowAlert(false)} // close button hides alert
        >
          This is a success message!
        </Alert>
      )}
    </Stack>
  );
}

export default App;
