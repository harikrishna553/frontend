import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <strong>Some Text</strong>
      <Typography variant="h1" display="block">
        This is a block heading
      </Typography>

      <strong>Some Text</strong>
      <Typography variant="h2" display="inline">
        This is an inline heading
      </Typography>

      <strong>Some Text</strong>
      <Typography
        variant="body1"
        display="inline-block"
        style={{
          width: "40px",
        }}
      >
        This is an inline-block paragraph.
      </Typography>
    </>
  );
}

export default App;
