import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useState } from "react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        backgroundColor: "lightblue",
      }}
      value={selectedIndex}
      onChange={(event, newIndexValue) => {
        console.log(newIndexValue);
        setSelectedIndex(newIndexValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Add New Group"
        icon={<GroupIcon />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}

export default App;
