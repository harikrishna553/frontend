import kaplay from "kaplay";

function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return [getInt(0, 255), getInt(0, 255), getInt(0, 255)];
}

// Initialize Kaplay
const k = kaplay({
  background: [250, 250, 250], // Light blue background (sky-like),
  buttons: {
    left: { keyboard: ["left"], gamepad: ["west"] },
    right: { keyboard: ["right"], gamepad: ["east"] },
  },
});

// Game Configuration
const PLAYER_SPEED = 2000;
const GRAVITY = 500;
let score = 0;
let missedStars = 0;
const MAX_MISSED_STARS = 10;
let secondsElapsed = 0; // Timer variable

// Set gravity for the game world
k.setGravity(GRAVITY);

// Load assets
k.loadRoot("./");
k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("star", "sprites/star.svg");
k.loadSound("collect", "sounds/collect.mp3");
k.loadSound("gameOver", "sounds/game_over.mp3");

// Display the score, missed stars, and timer
const scoreLabel = k.add([
  k.text(`Score: ${score}`, 10),
  k.pos(20, 20),
  k.fixed(),
  k.color(0, 0, 0),
]);

const missedLabel = k.add([
  k.text(`Missed: ${missedStars}/${MAX_MISSED_STARS}`, 20),
  k.pos(20, 50),
  k.fixed(),
  k.color(0, 0, 0),
]);

const timerLabel = k.add([
  k.text(`Time: 0s`, 24),
  k.pos(k.width() - 400, 20),
  k.fixed(),
  k.color(0, 0, 0),
]);

// Create the player
const player = k.add([
  k.sprite("bean"),
  k.pos(k.width() / 2, k.height() - 100),
  k.body(),
  k.area(),
]);

// Function to update the score
const updateScore = () => {
  score += 1;
  scoreLabel.text = `Score: ${score}`;
  k.play("collect", { volume: 1 }); // Play collect sound
};

// Function to update missed stars count
const updateMissedStars = () => {
  missedStars += 1;
  missedLabel.text = `Missed: ${missedStars}/${MAX_MISSED_STARS}`;

  // End the game if missed stars exceed the limit
  if (missedStars >= MAX_MISSED_STARS) {
    endGame();
  }
};

let gameEnded = false;

// Function to end the game
const endGame = () => {
  gameEnded = true;
  starSpawnner.cancel();
  k.play("gameOver", { volume: 1 }); // Play game over sound
  k.add([
    k.text("Game Over", 48),
    k.pos(k.width() / 2 - 150, k.height() / 2),
    k.color(255, 0, 0),
  ]);
};

// Function to spawn stars
const spawnStar = () => {
  const x = k.rand(20, k.width() - 20); // Random x position
  const star = k.add([
    k.sprite("star"),
    k.pos(x, -20), // Spawn above the screen
    k.area(),
    k.body(),
    k.scale(3),
    k.color(...getRandomColor()),
    "star",
  ]);

  // Remove star if it collides with the ground
  star.onCollide("ground", () => {
    updateMissedStars();
    k.destroy(star);
  });
};

// Spawn stars every 1.5 seconds
let starSpawnner = k.loop(1, spawnStar);

// Handle player movement
k.onKeyDown("left", () => {
  if (player.pos.x > 0) {
    player.move(-PLAYER_SPEED, 0);
  }
});

k.onKeyDown("right", () => {
  if (player.pos.x < k.width() - player.width) {
    player.move(PLAYER_SPEED, 0);
  }
});

k.onKeyPress("space", () => {
  player.jump();
});

// Handle star collection
player.onCollide("star", (star) => {
  updateScore(); // Increase score
  k.destroy(star); // Remove the star
});

// Add the ground
k.add([
  k.rect(k.width(), 50),
  k.pos(0, k.height() - 50),
  k.area(),
  k.color(109, 99, 19),
  k.body({ isStatic: true }),
  "ground", // Tag for collision detection
]);

// Timer function that updates every second
const updateTimer = () => {
  if (!gameEnded) {
    secondsElapsed += 1;
    timerLabel.text = `Time: ${secondsElapsed}s`;
  } else {
    timerController.cancel();
  }
};

// Update the timer every second
let timerController = k.loop(1, updateTimer);
