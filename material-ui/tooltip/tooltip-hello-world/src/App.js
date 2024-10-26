import { Tooltip, Box } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  return (
    <Box
      sx={{
        margin: 10,
      }}
    >
      <Tooltip title="Click Here To Accept The Consent" enterDelay ={300} leaveDelay={200}>
        <Button variant="contained">Accept Consent</Button>
      </Tooltip>
    </Box>
  );
}

export default App;
