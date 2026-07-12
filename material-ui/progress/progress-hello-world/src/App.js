import { CircularProgress, LinearProgress, Stack } from "@mui/material";

function App() {
  return (
    <Stack
      spacing={2}
      sx={{
        margin: 2,
      }}
    >
      <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress
          color="success"
          variant="determinate"
          size={100}
          value={78}
        />
      </Stack>

      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={78} />
      </Stack>
    </Stack>
  );
}

export default App;
