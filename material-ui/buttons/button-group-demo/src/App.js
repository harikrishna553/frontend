import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Stack
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "100px" /* Adds 20px gap between both rows and columns */,
        columnGap: "100px",
      }}
    >
      <Stack>
        <Typography variant="h5" gutterBottom>
          Sample Button Group
        </Typography>
        <ButtonGroup>
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>

      <Stack
        sx={{
          marginTop: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Variant Demo
        </Typography>

        <Stack
          sx={{
            marginLeft: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Text variant
          </Typography>
          <ButtonGroup variant="text">
            <Button>Previous</Button>
            <Button>Home</Button>
            <Button>Next</Button>
          </ButtonGroup>

          <Typography variant="h6" gutterBottom>
            Contained variant
          </Typography>
          <ButtonGroup variant="contained">
            <Button>Previous</Button>
            <Button>Home</Button>
            <Button>Next</Button>
          </ButtonGroup>

          <Typography variant="h6" gutterBottom>
            Contained variant Disable Elevation
          </Typography>
          <ButtonGroup variant="contained" disableElevation>
            <Button>Previous</Button>
            <Button>Home</Button>
            <Button>Next</Button>
          </ButtonGroup>

          <Typography variant="h6" gutterBottom>
            Outlined variant
          </Typography>
          <ButtonGroup variant="outlined">
            <Button>Previous</Button>
            <Button>Home</Button>
            <Button>Next</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Set Secondary Color for the Button Group
        </Typography>
        <ButtonGroup color="secondary" variant="contained" disableElevation>
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>

      <Stack
        sx={{
          marginTop: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Buttons By Size
        </Typography>
        <ButtonGroup
          variant="contained"
          size="small"
          disableElevation
          sx={{
            marginBottom: 2,
          }}
        >
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          size="medium"
          disableElevation
          sx={{
            marginBottom: 2,
          }}
        >
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          size="large"
          disableElevation
          sx={{
            marginBottom: 2,
          }}
        >
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <Typography variant="h5" gutterBottom>
          Vertical Orientation
        </Typography>
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          sx={{
            width: 100,
          }}
        >
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <Typography variant="h5" gutterBottom>
          Occupy Full Width
        </Typography>
        <ButtonGroup fullWidth>
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <Typography variant="h5" gutterBottom>
          Disable buttons
        </Typography>
        <ButtonGroup disabled>
          <Button>Previous</Button>
          <Button>Home</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default App;
