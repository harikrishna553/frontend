import React from "react";
import { Button, Typography, Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello, World!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your first Material UI React app.
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}
  
export default App;
