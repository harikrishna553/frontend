import { Chip, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState([
    "html",
    "css",
    "javascript",
    "react",
    "material-ui",
  ]);

  function handleDelete(tag) {
    setTags(tags.filter((currentTag) => currentTag !== tag));
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        margin: 5,
      }}
    >
      {tags.map((tag, index) => (
        <Chip
          key={tag}
          label={tag}
          color="primary"
          onDelete={() => handleDelete(tag)}
        />
      ))}
    </Stack>
  );
}

export default App;
