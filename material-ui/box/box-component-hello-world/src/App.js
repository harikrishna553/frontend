import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Box
        m={2} // margin: 16px (multiplied by the default spacing factor of 8px)
        p={3} // padding: 24px (3 * 8px)
        color="primary" // text color from the theme
        bgcolor="success.light" // background color from the theme
        display="flex" // set display to flex
        justifyContent="center" // center content horizontally
        alignItems="center" // center content vertically
        height="100px" // set a specific height
        width="300px" // set a specific width
      >
        <Typography variant="h6">Styled Box</Typography>
      </Box>

      <Box
        sx={{
          padding: { xs: 1, sm: 2, md: 3, lg: 4 },
          fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "24px" },
        }}
      >
        Responsive Font Size
      </Box>

      <Box component="p">Material-UI is fun to learn</Box>
    </Box>
  );
}

export default App;
