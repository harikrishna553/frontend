import {
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import StarRateIcon from "@mui/icons-material/StarRate";
import SnoozeIcon from "@mui/icons-material/Snooze";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ForwardIcon from "@mui/icons-material/Forward";

function App() {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
      <List
        sx={{
          width: 150,
          backgroundColor: "#f0f0f0",
          padding: 1,
        }}
        subheader="List Demo"
      >
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>

      <List
        sx={{
          width: 150,
          backgroundColor: "#f0f0f0",
          padding: 1,
        }}
        subheader="Mail Navigation"
      >
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <StarRateIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <SnoozeIcon />
          </ListItemIcon>
          <ListItemText primary="Snoozed" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LabelImportantIcon />
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ForwardIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>

      <List
        sx={{
          width: 180,
          backgroundColor: "#f0f0f0",
          padding: 1,
        }}
        subheader="Wrap Icons in Avatar"
      >
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <StarRateIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <SnoozeIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Snoozed" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <LabelImportantIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <ForwardIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>

      <List
        sx={{
          width: 250,
          backgroundColor: "#f0f0f0",
          padding: 1,
        }}
        subheader="Mail App"
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="Inbox" secondary="Your Incoming mails" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <StarRateIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Starred" secondary="Starred Emails" />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <SnoozeIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Snoozed" secondary="Remainders" />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <LabelImportantIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Important" secondary="Imortant Emails" />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <ForwardIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="Sent" secondary="Sent From You" />
        </ListItem>
      </List>
    </Stack>
  );
}

export default App;
