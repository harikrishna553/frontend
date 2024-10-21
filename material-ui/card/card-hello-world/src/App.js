import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Card, CardActions, CardMedia } from "@mui/material";

let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

function App() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        margin: 10,
      }}
    >
      {numbers.map((num) => {
        return (
          <Grid size={3} key={num}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRI7EUjsb2Ne4r791oSSNcMfkC38F-ChCGQmsi3nyYjeWcxHKp8dHJaKnglvLPNndjVOXruNqDHNM7dE4SuhhMiDrmZgU2KSdLlZ93vTg"
                alt="Trekking Places Near Bangalore"
              />
              <Typography
                variant="h6"
                component="p"
                gutterBottom
                sx={{ padding: 1 }}
              >
                Ten Outstanding Trekking Places
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ paddingLeft: 1, paddingRight: 1 }}
              >
                Hiking is more than just moving in nature. It is a way to let
                your soul dangle, clear your head, and recharge your batteries.
                Sayings and quotes about hiking can enrich this experience even
                more and motivate us to put on our hiking boots and get going.
              </Typography>
              
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
