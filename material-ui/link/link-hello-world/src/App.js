import { Box, Stack, Link, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Link as RouterLink } from "react-router-dom";

function App() {
  const linkStyles = {
    color: "primary.main",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <BrowserRouter>
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
          marginTop: 5,
          padding: 2,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ marginBottom: 3 }}
        >
          <Link
            href="https://www.google.com/"
            target="_blank"
            rel="noopener"
            sx={linkStyles}
          >
            Go to Google
          </Link>
          <Link component={RouterLink} to="/home" sx={linkStyles}>
            Home
          </Link>

          <Link component={RouterLink} to="/about" sx={linkStyles}>
            About
          </Link>
        </Stack>

        <Typography variant="h6">
          Click On Any Link To Understand The Functionality
        </Typography>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
