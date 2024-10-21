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
      <Grid container spacing={2}>
        <Grid size={8}>
          <Box sx={{ ...boxStyle, backgroundColor: "primary.light" }}>
            size=8
          </Box>
        </Grid>
        <Grid size={4}>
          <Box sx={{ ...boxStyle, backgroundColor: "secondary.light" }}>
            size=4
          </Box>
        </Grid>
        <Grid size={4}>
          <Box sx={{ ...boxStyle, backgroundColor: "success.light" }}>
            size=4
          </Box>
        </Grid>
        <Grid size={8}>
          <Box sx={{ ...boxStyle, backgroundColor: "error.light" }}>size=8</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HelloWorld;
