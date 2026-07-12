import MenuItem from "./MenuItem";

export default function MenuList({ listOfItems }) {
  return (
    <ul>
      {listOfItems.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </ul>
  );
}
