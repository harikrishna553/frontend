import { Stack, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemText } from "@mui/material";

function App() {
  return (
    <Stack
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
        margin: 5,
        padding: 2,
      }}
    >
      <Accordion
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="paymentMethods-content"
          id="paymentMethods-header"
          sx={{
            backgroundColor: "#f0f0f0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            What payment methods do we accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#fafafa",
            padding: 2,
          }}
        >
          <Typography sx={{ marginBottom: 1 }}>
            We accept the following payment methods:
          </Typography>
          <List
            sx={{
              paddingLeft: 2,
            }}
          >
            <ListItem>
              <ListItemText primary="1. Credit/Debit Cards" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. PayPal" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. Bank Transfer" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default App;
