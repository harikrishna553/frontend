import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function App() {
  const [myButton, setMyButton] = useState(null);

  function handleClose(event) {
    setMyButton(null);
  }

  return (
    <Box
      sx={{
        margin: 10,
      }}
    >
      <Button
        variant="contained"
        onClick={(event) => {
          setMyButton(event.target);
        }}
      >
        Click Here
      </Button>

      <Menu
        anchorEl={myButton}
        open={Boolean(myButton)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        transitionDuration={{ enter: 300, exit: 300 }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} divider>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleClose}>Blogs</MenuItem>
        <MenuItem onClick={handleClose} selected>
          Demos
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default App;
