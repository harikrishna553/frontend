import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Stack, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  function closeDialog() {
    setOpenDialog(false);
  }

  return (
    <Stack
      sx={{
        margin: 10,
        width: 200,
      }}
    >
      <Button
        onClick={(event) => {
          setOpenDialog(true);
        }}
        variant="contained"
      >
        Redeem Units
      </Button>
      <Dialog open={openDialog} onClose={closeDialog}>
        <DialogTitle>Would You Like to Redeem the Units?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Click the Submit button to redeem the units. Once submitted, you
            will receive the funds within two business days.
          </DialogContentText>

          <DialogActions>
            <Button onClick={closeDialog} variant="contained">
              Cancel
            </Button>
            <Button onClick={closeDialog} variant="contained">
              Redeem
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}

export default App;
