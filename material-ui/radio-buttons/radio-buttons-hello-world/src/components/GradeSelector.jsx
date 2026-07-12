import { Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

export default function GradeSelector() {
  const [grade, setGrade] = useState("");

  return (
    <div>
      <p>Choose Your Academic Grade</p>

      <RadioGroup
        value={grade}
        onChange={(event) => {
          console.log(`Your Grade : ${event.target.value}`);
          setGrade(event.target.value);
        }}
      >
        <div>
          <Radio value="A" />
          <span>Grade A</span>
        </div>

        <div>
          <Radio value="B" />
          <span>Grade B</span>
        </div>

        <div>
          <Radio value="C" />
          <span>Grade C</span>
        </div>

        <div>
          <Radio value="D" />
          <span>Grade D</span>
        </div>
      </RadioGroup>
    </div>
  );
}
