import { Stack, Avatar } from "@mui/material";

function App() {
  return (
    <Stack
      spacing={2}
      sx={{
        margin: 10,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar>HK</Avatar>
        <Avatar
          sx={{
            backgroundColor: "primary.light",
          }}
        >
          MC
        </Avatar>
        <Avatar
          sx={{
            backgroundColor: "secondary.light",
          }}
        >
          LG
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Random User"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/not_found.jpg"
          alt="Random User"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Random User"
          variant="rounded"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Random User"
          variant="square"
        />
      </Stack>
    </Stack>
  );
}

export default App;
