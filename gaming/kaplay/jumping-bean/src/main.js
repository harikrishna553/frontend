import kaplay from "kaplay"; // Import Kaplay.js library

// Initialize Kaplay.js with game settings
const k = kaplay({
  width: 1000,               // Set game canvas width
  height: 800,               // Set game canvas height
  background: [135, 206, 250], // Light blue background (sky-like)
});

// Set gravity for the game world
// Higher values make objects fall faster
k.setGravity(1000);

// Load player sprite
// The "bean.png" sprite will represent the player character
k.loadSprite("bean", "sprites/bean.png");

// Add the player to the game world
// The player is positioned, given a sprite, physics properties (body), and collision area
let player = k.add([
  k.pos(300, 100),           // Initial position of the player
  k.sprite("bean"),          // Assign the "bean" sprite
  k.body(),                  // Enable physics for the player (affected by gravity)
  k.area(),                  // Enable collision detection
]);

// Add ground (static platform) for the player to land on
// The ground is a wide rectangle, positioned near the bottom of the canvas
k.add([
  k.rect(k.width(), 100),    // Rectangle as wide as the canvas
  k.pos(0, 700),             // Position at the bottom of the canvas
  k.area(),                  // Enable collision detection for the ground
  k.outline(3),              // Add an outline for visibility
  k.color(109, 99, 19),      // Brown-like color for the ground
  k.body({ isStatic: true }),// Make the ground immovable and unaffected by gravity
]);

// Add on-screen instructions for the player
k.add([
  k.text("Use arrow keys to move, space to jump!", { size: 24 }), // Instruction text
  k.pos(200, 10),              // Position text at the top-left corner
  k.color(0, 0, 0),           // Black text color
]);

// Define jump behavior for the player
// Player can jump when on the ground by pressing the space bar
player.onKeyPress("space", () => {
  if (player.isGrounded()) {  // Check if the player is on the ground
    player.jump(400);         // Jump with a force of 400
  }
});

// Define smooth horizontal movement for the player
// Move left when the left arrow key is held down
player.onKeyDown("left", () => {
  player.move(-300, 0);       // Move left with a speed of 300
});

// Move right when the right arrow key is held down
player.onKeyDown("right", () => {
  player.move(300, 0);        // Move right with a speed of 300
});

// Add screen boundaries to prevent the player from moving off the screen
player.onUpdate(() => {
  if (player.pos.x < 0) { 
    player.pos.x = 0;         // Prevent moving off the left edge
  }
  if (player.pos.x > k.width() - player.width) {
    player.pos.x = k.width() - player.width; // Prevent moving off the right edge
  }
});
