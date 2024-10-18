import { Button, Stack, Typography, Box } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        sx={{
          margin: "20px",
        }}
      >
        <Stack spacing={2} direction="row">
          <Typography variant="h5" gutterBottom>
            Variants
          </Typography>
          <Button>Text Button</Button>
          <Button variant="contained">Contained Button</Button>
          <Button variant="outlined">Outlined Button</Button>
        </Stack>

        <Stack spacing={5} direction="row">
          <Typography variant="h5" gutterBottom>
            Colored Buttons
          </Typography>
          <Button color="primary" variant="contained">
            Primary Color
          </Button>
          <Button color="secondary" variant="contained">
            Secondary Color
          </Button>
          <Button color="error" variant="contained">
            Error Color
          </Button>
          <Button color="warning" variant="contained">
            Warning Color
          </Button>
          <Button color="info" variant="contained">
            Info Color
          </Button>
          <Button color="success" variant="contained">
            Success Color
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Typography variant="h5" gutterBottom>
            Buttons by Size
          </Typography>
          <Button size="small" variant="contained">
            small
          </Button>
          <Button variant="contained">Medium</Button>
          <Button size="large" variant="contained">
            Large
          </Button>
        </Stack>

        <Stack direction="row">
          <Typography variant="h5" gutterBottom>
            Disabled Buttons
          </Typography>

          <Button disabled>Default Disabled button</Button>

          <Button
            variant="contained"
            disabled
            sx={{
              backgroundColor: "grey.500", // Custom grey background
              color: "white", // Custom text color
              opacity: 0.7, // Custom opacity
            }}
          >
            Custom Disabled Button
          </Button>
        </Stack>

        <Stack direction="row">
          <Typography variant="h5">Model Button as Hyper Link</Typography>

          <Button href="https://www.google.com/">
            Click Here Top open Google Search Page
          </Button>
        </Stack>
      </Stack>
      <Button variant="contained" fullWidth>
        Full Width button
      </Button>
      <Box mt={2} /> {/* Adds vertical space (margin-top) */}
      <Button variant="contained">Normal Button</Button>
      <Box mt={2} /> {/* Adds vertical space (margin-top) */}

      <Button variant="contained" disableElevation sx = {
        {
          margin: "5px"
        }
      }>
        Elevation Disabled
      </Button>
      <Box mt={2} /> {/* Adds vertical space (margin-top) */}
      <Button variant="contained" sx = {
        {margin: "5px"}
      }>Regular Button</Button>
    </>
  );
}

export default App;