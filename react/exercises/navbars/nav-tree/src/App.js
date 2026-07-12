import listOfItems from "./components/items.json";
import MenuList from "./components/MenuList";
import "./styles/styles.css";

function App() {
  return (
    <div className="menuListContainer">
      <MenuList listOfItems={listOfItems} />
    </div>
  );
}

export default App;
