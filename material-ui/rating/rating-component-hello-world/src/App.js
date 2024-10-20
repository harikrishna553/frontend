import { Rating, Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "80vh",
      }}
    >
      <Rating
        value={rating}
        onChange={(event, selectedValue) => {
          console.log(`Selected Rating : ${selectedValue}`);
          setRating(selectedValue);
        }}
      />
    </Box>
  );
}

export default App;
