export default function BoxComponent() {
  let paraStyles = {
    fontSize: 30,
    fontweight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightcoral",
        border: "1px solid black",
        margin: 20,
        textAlign: "center",
        width: 250,
        height: 250,
      }}
    >
      <p style={paraStyles}>Hello World.....</p>
    </div>
  );
}
