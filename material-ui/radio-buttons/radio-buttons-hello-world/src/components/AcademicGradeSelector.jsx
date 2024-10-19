import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useState } from "react";

export default function AcademicGradeSelector() {
  const [grade, setGrade] = useState("");

  return (
    <FormControl>
      <FormLabel>Choose Your Academic Grade</FormLabel>
      <RadioGroup
        value={grade}
        onChange={(event) => {
          console.log(`Your Grade : ${event.target.value}`);
          setGrade(event.target.value);
        }}
      >
        <FormControlLabel value="A" control={<Radio />} label="Grade A" />
        <FormControlLabel value="B" control={<Radio />} label="Grade B" />
        <FormControlLabel value="C" control={<Radio />} label="Grade C" />
        <FormControlLabel value="D" control={<Radio />} label="Grade D" />
      </RadioGroup>
    </FormControl>
  );
}
