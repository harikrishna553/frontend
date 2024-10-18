import { Button, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="primary">
          Primary Color Button
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "white" }}
        >
          Primary Light Color Button
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.main", color: "white" }}
        >
          Primary Main Color Button
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.dark", color: "white" }}
        >
          Primary Dark Color Button
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.contrastText", color: "black" }}
        >
          Primary Contrast Text Color Button
        </Button>
      </Stack>
    </>
  );
}

export default App;
