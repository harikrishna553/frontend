import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

function App() {
  return (
    <Box>
      <AppBar color="info">
        <Toolbar variant="prominent">
          <IconButton aria-label="movie creation icon">
            <TheaterComedyIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              paddingLeft: 2,
            }}
          >
            Movie Creation App
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Demos</Button>
            <Button color="inherit">Contact Us</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
