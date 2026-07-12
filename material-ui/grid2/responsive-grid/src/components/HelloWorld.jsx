import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function HelloWorld() {
  const boxStyle = {
    backgroundColor: "#fff",
    padding: "16px", // Example padding
    textAlign: "center",
    color: "#000", // Example text color
  };

  return (
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
        Hello World Grid
      </Typography>
      <Grid container spacing={2} sx={{ border: "1px solid black" }}>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 4, xl: 2 }}>
          <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
            Box 1
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 4, xl: 2 }}>
          <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
            Box 2
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 4, xl: 2 }}>
          <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
            Box 3
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 4, xl: 2 }}>
          <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>Box 4</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HelloWorld;
