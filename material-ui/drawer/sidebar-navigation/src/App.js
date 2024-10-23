import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const items = ["Profile", "Contact Us", "Demos"];

  return (
    <Box>
      <IconButton
        onClick={() => {
          setOpenDrawer(true);
        }}
        sx={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        PaperProps={{
          sx: {
            width: "15vw",
          },
        }}
        ModalProps={{
          hideBackdrop: true,
        }}
      >
        <List>
          {items.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
        </List>

        <IconButton
          onClick={() => {
            setOpenDrawer(false);
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Drawer content here */}
      </Drawer>
    </Box>
  );
}

export default App;
