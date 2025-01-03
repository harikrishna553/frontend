import kaplay from "kaplay";

const gameWindowWidth = 1000;
const gameWindowHeight = 800;

// Utility object for random number generation
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

  /**
   * Generates a random x-coordinate within the game window's width.
   * @returns {number} A random x-coordinate.
   */
  getRandomX() {
    return this.getInt(100, gameWindowWidth);
  },

  /**
   * Generates a random y-coordinate within the game window's height.
   * @returns {number} A random y-coordinate.
   */
  getRandomY() {
    return this.getInt(100, gameWindowHeight);
  },

  /**
   * Generates a random color value (between 1 and 255).
   * @returns {number} A random color value.
   */
  getColor() {
    return this.getInt(1, 255);
  },

  /**
   * Generates a random movement vector for objects.
   * @returns {Object} A vector with x and y components.
   */
  getVector() {
    return { x: this.getInt(-1, 1), y: 0 }; // Random movement vector (x)
  },

  /**
   * Generates a random speed for movement between 50 and 500.
   * @returns {number} A random movement speed.
   */
  getMovementSpeed() {
    return this.getInt(50, 500);
  },
};

// Adds a rectangle shape with random properties
function addRectangle(k) {
  const width = Random.getInt(10, 40);
  const height = Random.getInt(10, 40);

  k.add([
    k.rect(width, height),
    k.pos(Random.getRandomX(), Random.getRandomY()),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(
      k.vec2(Random.getVector().x, Random.getVector().y),
      Random.getMovementSpeed()
    ),
    k.color(Random.getColor(), Random.getColor(), Random.getColor()),
  ]);
}

// Adds a circle shape with random properties
function addCircle(k) {
  const radius = Random.getInt(10, 20);

  k.add([
    k.circle(radius),
    k.pos(Random.getRandomX(), Random.getRandomY()),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(
      k.vec2(Random.getVector().x, Random.getVector().y),
      Random.getMovementSpeed()
    ),
    k.color(Random.getColor(), Random.getColor(), Random.getColor()),
  ]);
}

// Adds a sprite (player) with random starting position
function addSprite(k) {
  k.add([
    k.pos(Random.getRandomX(), Random.getRandomY()),
    k.sprite("bean"),
    k.body(),
    k.area(),
  ]);
}

// Initialize the Kaplay game engine
const k = kaplay({
  width: gameWindowWidth,
  height: gameWindowHeight,
  background: [135, 206, 250], // Sky blue background
});

k.setGravity(100);

// Load the sprite
k.loadSprite("bean", "sprites/bean.png");

// Add on-screen instructions for the player
k.add([
  k.text("Welcome to the Kaplay Game!", { size: 48, color: [255, 255, 255] }), // White text with font size 48
  k.pos(100, 10), // Position text at the top-left corner
  k.color(0, 0, 0), // Black text color
]);

// Add game objects (rectangles, circles, sprites)
for (let i = 0; i < 50; i++) {
  addRectangle(k);
  addCircle(k);
  addSprite(k);
}
