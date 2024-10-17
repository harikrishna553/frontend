import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        noWrap
        sx={{
          width: "700px",
        }}
      >
        In Material-UI, the Typography component provides a variety of
        properties to style text in React applications. One useful property is
        noWrap, which helps to control the behaviour of text when it exceeds the
        width of its container.
      </Typography>
    </>
  );
}

export default App;
