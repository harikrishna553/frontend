import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography, Stack } from "@mui/material";

function App() {
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
        margin: 10,
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
          Spacing = 2
        </Typography>
        <Grid container spacing={2} sx={{ border: "1px solid black" }}>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              Box 1
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              Box 2
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
              Box 3
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>
              Box 4
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
          rowSpacing={4} and columnSpacing={8}
        </Typography>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={8}
          sx={{ border: "1px solid black" }}
        >
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              Box 1
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              Box 2
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
              Box 3
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>
              Box 4
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
          Responsive Spacing (xs: 2, md: 3, lg: 4, xl: 5)
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 3, lg: 4, xl: 5 }}
          columnSpacing={{ xs: 2, md: 3, lg: 4, xl: 5 }}
          sx={{ border: "1px solid black" }}
        >
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
              Box 1
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
              Box 2
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
              Box 3
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>
              Box 4
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default App;
