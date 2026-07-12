import { LoadingButton } from "@mui/lab";
import { Stack, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Stack
      sx={{
        width: 500,
        margin: 5
      }}
      direction="row"
      spacing={2}
    >
      <Button onClick={(event) => setLoading((currentValue) => !currentValue)}>
        Click Me To Set loading state to {loading ? "false" : "true"}
      </Button>
      <LoadingButton
        loading={loading}
        variant="contained"
        sx={{
          width: 180,
        }}
      >
        Data Fetched
      </LoadingButton>
    </Stack>
  );
}

export default App;
