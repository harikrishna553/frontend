import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      <Typography
        variant="sibtitle1"
        style={{
          color: "#f00",
        }}
      >
        Typography variants:
      </Typography>

      <br />

      <Typography variant="body1">
        A "typography variant" in Material-UI refers to predefined styles for
        different text elements, such as headings, subtitles, body text,
        captions, etc. Each variant comes with specific font settings, including
        font size, font weight, line height, and letter spacing, to ensure
        consistency.
      </Typography>

      <br />

      <Typography
        variant="sibtitle2"
        style={{
          color: "#f00",
        }}
        gutterBottom
      >
        Example
      </Typography>

      <br />

      <Typography variant="body2">
        h1: Used for large headings, typically the main title of a page.
      </Typography>

      <Typography variant="overline">Overline Content</Typography>
    </>
  );
}

export default App;
