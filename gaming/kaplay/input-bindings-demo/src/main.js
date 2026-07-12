import kaplay from "kaplay";

// Initialize Kaplay with input bindings
const k = kaplay({
  buttons: {
    jump: {
      keyboard: ["space", "up"],
      gamepad: ["south"],
    },
  },
});

// Constants for game configuration
const GRAVITY = 1000;
const PLAYER_INITIAL_POSITION = [120, 80];
const JUMP_FORCE = 400;
const MOVE_SPEED = 300;
const GROUND_HEIGHT = 100;

// Initialize gravity for the game world
k.setGravity(GRAVITY);

// Load assets
k.loadRoot("./"); // Base path for assets
k.loadSprite("bean", "sprites/bean.png"); // Player sprite
k.loadSound("jumpSound", "sounds/jump.mp3"); // Jump sound effect

// Create the player object
const player = k.add([
  k.pos(...PLAYER_INITIAL_POSITION), // Set initial position
  k.sprite("bean"), // Use the "bean" sprite
  k.body(), // Enable physics for the player
  k.area(), // Define collision area for interactions
]);

// Function to handle jumping
const handleJump = () => {
  k.play("jumpSound", {
    volume: 0.5, // Set sound volume
    speed: 1.5, // Play sound at faster speed
  });
  player.jump(JUMP_FORCE); // Apply jump force
};

// Function to handle horizontal movement
const handleMovement = (direction) => {
  player.move(direction * MOVE_SPEED, 0); // Move left (-1) or right (1)
};

// Bind input events to actions
player.onButtonPress("jump", handleJump); // Trigger jump on "jump" button press
player.onKeyDown("left", () => handleMovement(-1)); // Move left on "left" key
player.onKeyDown("right", () => handleMovement(1)); // Move right on "right" key

// Add the ground object to the game world
const ground = k.add([
  k.rect(k.width(), GROUND_HEIGHT), // Ground spans the width of the game
  k.pos(0, k.height() - GROUND_HEIGHT), // Position at the bottom of the screen
  k.area(), // Define collision area
  k.outline(3), // Add an outline for visibility
  k.color(109, 99, 19), // Set ground color (brown-like)
  k.body({ isStatic: true }), // Make the ground static (immovable)
]);
