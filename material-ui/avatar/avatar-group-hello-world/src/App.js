import { Avatar, AvatarGroup, Stack } from "@mui/material";

function App() {
  return (
    <Stack
      spacing={2}
      sx={{
        margin: 2,
      }}
    >
      <Stack direction="row">
        <AvatarGroup>
          <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/76.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/77.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/78.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row">
        <AvatarGroup max={3}>
          <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/76.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/77.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/78.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row">
        <AvatarGroup total={100}>
          <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/76.jpg" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default App;
