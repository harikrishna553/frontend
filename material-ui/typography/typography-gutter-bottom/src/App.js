import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        This is a heading with gutter bottom
      </Typography>

      <Typography variant="h5">
        This is a heading without gutter bottom
      </Typography>

      <Typography variant="h5" gutterBottom>
        This is another heading with gutter bottom
      </Typography>
    </>
  );
}

export default App;
