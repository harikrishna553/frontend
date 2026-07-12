import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          color: "#5080ff",
        }}
      >
        Home Page
      </Typography>
    </>
  );
}
