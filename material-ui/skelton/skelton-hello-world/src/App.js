import { Stack, Skeleton, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack
      spacing={1}
      sx={{
        margin: 10,
      }}
    >
      {loading ? (
        <Skeleton
          sx={{
            width: 200,
            height: 50,
          }}
        ></Skeleton>
      ) : (
        <>
          <Typography
            sx={{
              width: 200,
              height: 50,
            }}
          >
            User Details Loaded
          </Typography>
        </>
      )}

      {loading ? (
        <Skeleton
          sx={{
            width: 100,
            height: 100,
          }}
          variant="circular"
        ></Skeleton>
      ) : (
        <Avatar
          sx={{
            width: 100,
            height: 100,
          }}
        >
          GHK
        </Avatar>
      )}

      {loading ? (
        <Skeleton
          sx={{
            width: 300,
            height: 200,
          }}
          variant="rectangular"
        ></Skeleton>
      ) : (
        <img
          src="https://plus.unsplash.com/premium_photo-1695635984394-79e2f6e79f92"
          width={300}
          height={200}
        />
      )}
    </Stack>
  );
}

export default App;
