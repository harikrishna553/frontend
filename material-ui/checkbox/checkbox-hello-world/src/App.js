import { Checkbox } from "@mui/material";
import { FormControl, FormControlLabel } from "@mui/material";
import { useState } from "react";

function App() {
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 2,
        columnGap: 2,
        flexDirection: "column",
        margin: 10,
      }}
    >
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAndConditions ? true : false}
              onChange={(event, checked) => {
                console.log(`state: ${checked}`);
                setTermsAndConditions(checked);
              }}
            />
          }
          label="Agree to the Terms And Conditions"
        />
      </FormControl>
    </div>
  );
}

export default App;
