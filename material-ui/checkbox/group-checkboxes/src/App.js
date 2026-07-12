import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  function handleSelection(event) {
    const { value } = event.target;
    if (courses.includes(value)) {
      setCourses(courses.filter((course) => course !== value));
    } else {
      setCourses([...courses, value]);
    }
  }

  return (
    <form
      style={{
        display: "flex", // Corrected from 'displace' to 'display'
        flexDirection: "column",
        margin: 20,
      }}
      onSubmit={(event) => {
        event.preventDefault();
        if (courses.length === 0) {
          alert("Please select at least one course.");
        } else {
          alert(`Selected Courses: ${JSON.stringify(courses)}`);
        }
      }}
      aria-label="Course selection form"
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Select the courses you are interested in
        </FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                value="html"
                checked={courses.includes("html")}
                onChange={handleSelection}
                inputProps={{ "aria-label": "HTML course" }}
              />
            }
          />
          <FormControlLabel
            label="JAVA"
            control={
              <Checkbox
                value="java"
                checked={courses.includes("java")}
                onChange={handleSelection}
                inputProps={{ "aria-label": "Java course" }}
              />
            }
          />
          <FormControlLabel
            label="JavaScript"
            control={
              <Checkbox
                value="javascript"
                checked={courses.includes("javascript")}
                onChange={handleSelection}
                inputProps={{ "aria-label": "JavaScript course" }}
              />
            }
          />
        </FormGroup>
        <FormHelperText>Select one or more courses</FormHelperText>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={courses.length === 0} // Disable button if no courses are selected
        >
          Enroll Courses
        </Button>
      </FormControl>
    </form>
  );
}

export default App;
