import kaplay from "kaplay";

const k = kaplay({
  background: [255, 255, 255], // Light pink background
});

k.loadRoot("./");

// Center alignment helper
const centerX = k.width() / 2;
const centerY = k.height() / 2;

// Add instruction text
const text = k.add([
  k.text("1 to Stop, 2 to Go, and 3 to Caution", 40),
  k.pos(centerX - 300, centerY - 150), // Centered horizontally above the signals
  k.color(0, 0, 0),
  "heading",
]);

// Add traffic signals
const redSignal = k.add([
  k.circle(40), // Increased size
  k.color(255, 0, 0), // Red color
  k.pos(centerX - 100, centerY), // Centered horizontally with offset
  "redSignal",
]);

const greenSignal = k.add([
  k.circle(40), // Increased size
  k.color(0, 255, 0), // Green color
  k.pos(centerX, centerY), // Centered horizontally
  "greenSignal",
]);

const yellowSignal = k.add([
  k.circle(40), // Increased size
  k.color(255, 255, 0), // Yellow color
  k.pos(centerX + 100, centerY), // Centered horizontally with offset
  "yellowSignal",
]);

// Helper function to adjust opacity
function updateSignalOpacity(activeSignalTag) {
  console.log("Getting all objects");
  const allObjects = k.get("*");
  for (let obj of allObjects) {
    console.log("Object Tags:", obj.tags);
    if (obj.is("heading")) {
      continue;
    }
    obj.opacity = obj.is(activeSignalTag) ? 1 : 0.2; // Highlight active signal, dim others
  }
}

updateSignalOpacity("none");

// Stop (Red Signal)
k.onKeyDown("1", () => updateSignalOpacity("redSignal"));

// Go (Green Signal)
k.onKeyDown("2", () => updateSignalOpacity("greenSignal"));

// Caution (Yellow Signal)
k.onKeyDown("3", () => updateSignalOpacity("yellowSignal"));
