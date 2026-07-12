import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function App() {
  return (
    <SpeedDial
      icon={<SpeedDialIcon />}
      ariaLabel="Speed Dial"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction
        icon={<ContentCutIcon />}
        tooltipTitle="Cut"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction
        icon={<CameraAltIcon />}
        tooltipTitle="Camera"
        tooltipOpen
      />
    </SpeedDial>
  );
}

export default App;
