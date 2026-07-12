import {
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [bio, setBio] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setFormSubmitted(true);
      // Handle form submission (e.g., send data to an API)
      console.log("Form submitted:", {
        firstName,
        lastName,
        middleName,
        age,
        password,
        coverLetter,
        bio,
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 2,
        margin: 10,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        User Information Form
      </Typography>

      {formSubmitted && (
        <Alert
          severity="success"
          onClose={() => setFormSubmitted(false)}
          sx={{ width: "100%", mb: 2 }}
        >
          Form submitted successfully!
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={4} width="100%">
          <Stack direction="row" spacing={2}>
            <TextField
              variant="outlined"
              label="Enter First Name"
              placeholder="First Name Goes Here"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              required
            />
            <TextField
              variant="filled"
              label="Enter Last Name"
              placeholder="Last Name Goes Here"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              required
            />
            <TextField
              variant="standard"
              label="Enter Middle Name"
              placeholder="Middle Name Goes Here"
              value={middleName}
              onChange={(event) => {
                setMiddleName(event.target.value);
              }}
            />
            <TextField
              label="Enter Your Age"
              type="number"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
              required
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Enter Password"
              type="password"
              helperText="Use a-z, A-Z, 0-9, ! @ # $"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError(false); // Reset error on change
              }}
              error={passwordError}
              required
            />
            <TextField
              label="Enter Confirmation Password"
              type="password"
              helperText="Password and Confirmation Password must match"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                setPasswordError(false); // Reset error on change
              }}
              error={passwordError}
              required
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Cover Letter"
              multiline
              rows={5}
              value={coverLetter}
              onChange={(event) => {
                setCoverLetter(event.target.value);
              }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              label="Write About Yourself"
              fullWidth
              multiline
              rows={5}
              value={bio}
              onChange={(event) => {
                setBio(event.target.value);
              }}
            />
          </Stack>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default App;
