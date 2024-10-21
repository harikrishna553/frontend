import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography, Stack } from "@mui/material";

export default function App() {
  const boxStyle = {
    backgroundColor: "#fff",
    padding: "16px", // Example padding
    textAlign: "center",
    color: "#000", // Example text color
  };

  return (
    <Stack
      spacing={2}
      sx={{
        margin: 5,
      }}
    >
      <Box
        sx={{
          margin: 5,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            paddingTop: 5,
          }}
          gutterBottom
        ></Typography>
        <Grid container spacing={2} sx={{ border: "1px solid black" }}>
          <Grid size={2}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              Box 1 (size=2)
            </Box>
          </Grid>
          <Grid size="grow">
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              Box 2 (size=grow)
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          margin: 5,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            paddingTop: 5,
          }}
          gutterBottom
        ></Typography>
        <Grid container spacing={2} sx={{ border: "1px solid black" }}>
          <Grid size={2}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              Box 1 (size = 2)
            </Box>
          </Grid>
          <Grid size="grow">
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              Box 2 (size="grow")
            </Box>
          </Grid>

          <Grid size={2}>
            <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>
              Box 3(size 2)
            </Box>
          </Grid>

          <Grid size="grow">
            <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
              Box 4 (size="grow")
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
