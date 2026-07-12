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
        >
          Columns = 12 (Default)
        </Typography>
        <Grid container spacing={2} sx={{ border: "1px solid black" }}>
          <Grid size={4}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              4 columns
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              6 columns
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
        >
          Columns = 20
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ border: "1px solid black" }}
          columns={20}
        >
          <Grid size={4}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              4 columns
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              6 columns
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
        >
          Columns = 50
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ border: "1px solid black" }}
          columns={50}
        >
          <Grid size={4}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              4 columns
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              6 columns
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}