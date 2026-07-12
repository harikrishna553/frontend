import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function App() {
  function handleClose() {
    setTutorials(null);
  }

  const [tutorials, setTutorials] = useState(null);

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
            <Button
              color="inherit"
              endIcon={<KeyboardArrowRightIcon />}
              onClick={(event) => {
                setTutorials(event.target);
              }}
            >
              Tutorials
            </Button>
            <Button color="inherit">Contact Us</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={tutorials}
        open={Boolean(tutorials)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>Videos</MenuItem>
        <MenuItem onClick={handleClose}>Blogs</MenuItem>
        <MenuItem onClick={handleClose}>Books</MenuItem>
        <MenuItem onClick={handleClose}>Live Trainings</MenuItem>
      </Menu>
    </Box>
  );
}

export default App;
