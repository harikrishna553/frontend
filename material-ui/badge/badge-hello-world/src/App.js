import { Box, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function App() {
  return (
    <Box
      sx={{
        margin: 10,
      }}
    >
      <Badge
        badgeContent={10}
        color="secondary"
        max={99}
        showZero
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MailIcon />
      </Badge>
    </Box>
  );
}

export default App;
