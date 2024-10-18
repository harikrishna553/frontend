import { Button, Alert } from "@mui/material";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={(event) => {
          setAlert(true);
        }}
      >
        Click Me
      </Button>

      {alert && (
        <Alert
          severity="success"
          onClose={() => {
            setAlert(false);
          }}
        >
          This Is A Demo Alert
        </Alert>
      )}
    </>
  );
}

export default App;


