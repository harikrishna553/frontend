import kaplay from "kaplay";

// Constants for window dimensions
const WINDOW_WIDTH = 1000;
const WINDOW_HEIGHT = 1000;

// Utility object for generating random values
const Random = {
  /**
   * Generates a random integer between min and max (inclusive).
   * @param {number} min - The minimum value (inclusive).
   * @param {number} max - The maximum value (inclusive).
   * @returns {number} A random integer between min and max.
   */
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Get a random X-coordinate within the window
  getX() {
    return this.getInt(0, WINDOW_WIDTH);
  },

  // Get a random Y-coordinate within the window
  getY() {
    return this.getInt(0, WINDOW_HEIGHT);
  },

  // Get a random color code (0-255 for RGB)
  getColorCode() {
    return this.getInt(0, 255);
  },
};

// Initialize the KAPLAY game with specified dimensions
const k = kaplay({
  width: WINDOW_WIDTH,
  height: WINDOW_HEIGHT,
});

// Set global gravity for the game
k.setGravity(200);

// Load game assets
k.loadRoot("./"); // Sets the root directory for assets (useful for publishing)
k.loadSprite("bean", "sprites/bean.png"); // Load the "bean" sprite

/**
 * Spawns a new player object at a random X position.
 */
function spawnPlayer() {
  const player = add([
    k.pos(Random.getX(), Random.getInt(-50, 50)), // Start slightly above the screen
    k.sprite("bean"), // Use the "bean" sprite
    k.body(), // Adds physics body
    k.area(), // Enables collision detection
    k.color(
      // Assign a random color
      Random.getColorCode(),
      Random.getColorCode(),
      Random.getColorCode()
    ),
  ]);

  // Define movement controls for the player
  onKeyDown("left", () => player.move(-200, 0)); // Move left
  onKeyDown("right", () => player.move(200, 0)); // Move right
  onKeyDown("up", () => player.move(0, -200)); // Move up
  onKeyDown("down", () => player.move(0, 200)); // Move down
  onKeyDown("space", () => player.jump(400)); // Jump
}

// Create 10 players at random intervals
for (let i = 0; i < 10; i++) {
  k.loop(1, spawnPlayer); // Call spawnPlayer every second
}
