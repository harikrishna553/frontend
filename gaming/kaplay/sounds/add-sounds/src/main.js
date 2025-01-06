import kaplay from "kaplay";

// Initialize Kaplay
const k = kaplay();

// Set gravity for the game world
k.setGravity(1000);

// Load assets
k.loadRoot("./"); // Base path for assets (useful for publishing)
k.loadSprite("bean", "sprites/bean.png"); // Load the player sprite
k.loadSound("jumpSound", "sounds/jump.mp3"); // Load the jump sound

// Create the player object
const player = k.add([
  k.pos(120, 80), // Initial position
  k.sprite("bean"), // Use the "bean" sprite
  k.body(), // Enable physics
  k.area(), // Define collision area
]);

// Function to handle player jump
const handleJump = () => {
  k.play("jumpSound", {
    volume: 0.5, // Play sound at 50% volume
    speed: 1.5, // Play sound at 1.5x speed
  });
  player.jump(400); // Make the player jump
};

// Function to move the player
const handleMovement = (direction) => {
  const speed = 300; // Set the movement speed
  player.move(direction * speed, 0);
};

// Bind keys to actions
player.onKeyPress("space", handleJump); // Jump on spacebar press
player.onKeyDown("left", () => handleMovement(-1)); // Move left
player.onKeyDown("right", () => handleMovement(1)); // Move right

// Add the ground to the game world
k.add([
  k.rect(k.width(), 100), // Ground width spans the game width
  k.pos(0, 700), // Position at the bottom of the screen
  k.area(), // Define collision area
  k.outline(3), // Add an outline for visibility
  k.color(109, 99, 19), // Brown-like color for the ground
  k.body({ isStatic: true }), // Make the ground static
]);

// Notes:
// - Use `sound.stop()` to stop any playing sound if needed.
