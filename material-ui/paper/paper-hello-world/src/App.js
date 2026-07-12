import { Stack, Paper, Button, TextField } from "@mui/material";

function App() {
  return (
    <Paper
      elevation={3}
      variant="outlined"
      sx={{
        width: "80vw",
        height: "50vh",
        padding: 10,
        rowGap: 10,
        columnGap: 10,
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#F5F5F5",
        margin: 10,
      }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <TextField label="Enter Your Firstname" />
        <TextField label="Enter Your Lastname" />
        <TextField label="Enter Your Middlename" />
        <TextField label="Enter Your Age" type="number" />

        <TextField type="password" label="Enter Password" />
        <TextField type="password" label="Confirm Password" />

        <TextField
          label="Write About Yourself"
          rows={10}
          multiline
          sx={{ width: 500 }}
        />
      </Stack>

      <Button variant="contained" fullWidth>
        Register Me
      </Button>
    </Paper>
  );
}

export default App;
