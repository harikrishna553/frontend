import { Typography } from "@mui/material";

function App() {
  return (
    <Typography
      sx={{
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "primary.main",
        padding: (theme) => theme.spacing(2),
        "&:hover": {
          color: "secondary.main",
        },
        "@media (max-width:600px)": {
          fontSize: "1.2rem",
        },
      }}
    >
      Applying Styles Using sx Property
    </Typography>
  );
}

export default App;