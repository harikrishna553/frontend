import { Box, Stack, Typography, Divider } from "@mui/material";

function App() {
  const styles = {
    width: 100,
    height: 100,
    backgroundColor: "primary.light",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        margin: 5,
      }}
    >
      <Stack
        spacing={1}
        sx={{
          backgroundColor: "#f08f0f",
          padding: 3,
        }}
        divider={
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              backgroundColor: "black",
            }}
          />
        }
      >
        <Typography>Vertical Boxing</Typography>
        <Box sx={{ ...styles }}>
          <Typography>Box1</Typography>
        </Box>

        <Box sx={{ ...styles, backgroundColor: "secondary.light" }}>
          <Typography>Box2</Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          backgroundColor: "#80b000",
          padding: 3,
        }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "black",
            }}
          />
        }
      >
        <Typography>Horizontal Boxing</Typography>
        <Box sx={{ ...styles }}>
          <Typography>Box1</Typography>
        </Box>

        <Box sx={{ ...styles, backgroundColor: "secondary.light" }}>
          <Typography>Box2</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
