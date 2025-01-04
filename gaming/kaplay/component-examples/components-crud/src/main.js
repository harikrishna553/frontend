import kaplay from "kaplay";
// Uncomment the line below if you want to use Kaplay without the `k.` prefix
// import "kaplay/global";

const k = kaplay({
    background: [135, 206, 250], // Light blue background (sky-like)
});

k.loadRoot("./"); // A good idea for Itch.io publishing later

let player1;

// Helper function to initialize the player object
function createPlayer() {
  const player = k.add([
    k.rect(400, 60),
    k.pos(10, 10),
    k.color(255, 0, 0), // Ensure proper color format
    k.opacity(0.4), // Add transparency using `k.opacity`
  ]);
  return player;
}

// Helper function to add a scene transition text and bind a key for navigation
function addSceneNavigation(text, key, nextScene) {
  k.add([
    k.text(text, { size: 40 }),
    k.pos(400, 400),
    k.color(25, 150, 0)
  ]);
  k.onKeyPress(key, () => {
    k.go(nextScene);
  });
}

// Define scenes
k.scene("create", () => {
  player1 = createPlayer();
  addSceneNavigation("Press 1 to see the Demo Of Read Operation", "1", "read");
});

k.scene("read", () => {
  player1 = createPlayer();

  if (player1.has("rect")) {
    console.log(player1.width); // Access the width property from the 'rect' component
  }

  player1.moveBy(100, 10); // Adjust movement logic as needed
  addSceneNavigation("Press 1 to see the Demo Of Update Operation", "1", "update");
});

k.scene("update", () => {
  player1 = createPlayer();

  if (player1.has("rect")) {
    console.log(player1.width); // Access the width property from the 'rect' component
  }

  player1.moveBy(100, 10); // Adjust movement logic as needed
  player1.pos.x += 50; // Move the player 50px to the right
  player1.use(k.scale(2)); // Double the size of the object

  addSceneNavigation("Press 1 to see the Demo Of Delete Operation", "1", "delete");
});

k.scene("delete", () => {
  player1 = createPlayer();

  if (player1.has("rect")) {
    console.log(player1.width); // Access the width property from the 'rect' component
  }

  player1.moveBy(100, 10); // Adjust movement logic as needed
  player1.pos.x += 50; // Move the player 50px to the right
  player1.use(k.scale(2)); // Double the size of the object

  player1.unuse("color"); // Remove the color component
  if (!player1.has("color")) {
    console.log("Color component removed!");
  }

  addSceneNavigation("Press 1 to Start Again......", "1", "create");
});

// Start the game at the "create" scene
k.go("create");
