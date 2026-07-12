import kaplay from "kaplay";

let startTime = 0; // To track when the game starts

const k = kaplay({
  background: [135, 206, 250], // Light blue background (sky-like)
}); // Initialize the game

// Define the "start" scene
k.scene("start", () => {
  const startObject = k.add([
    k.text("Press SPACE to Start", { size: 50 }),
    k.pos(500, 500),
  ]);

  startObject.color = k.rgb(255, 20, 150);

  // Listen for the SPACE key to start the game
  k.onKeyPress("space", () => {
    startTime = Date.now(); // Record the start time
    k.go("game");
  });
});

// Define the "game" scene
k.scene("game", () => {
  // Add the player
  const player = k.add([
    k.rect(32, 32), // Draw a rectangle for the player
    k.pos(50, 50), // Initial position
    k.color(0, 0, 255), // Blue color
    k.area(), // Add collision detection
    "player", // Tag the player object
  ]);

  let counter = 0; // Track collected beans

  // Add 10 static beans (goal) at random positions
  for (let i = 0; i < 5; i++) {
    k.add([
      k.sprite("bean"), // Use a sprite for the bean
      k.pos(k.rand(0, k.width() - 32), k.rand(0, k.height() - 32)), // Random position
      k.area(), // Add collision detection for the bean
      "bean", // Tag the bean object
    ]);
  }

  // Add movement for the player
  k.onKeyDown("left", () => {
    player.move(-200, 0); // Move left
  });
  k.onKeyDown("right", () => {
    player.move(200, 0); // Move right
  });
  k.onKeyDown("up", () => {
    player.move(0, -200); // Move up
  });
  k.onKeyDown("down", () => {
    player.move(0, 200); // Move down
  });

  // Check for collision between player and beans
  k.onCollide("player", "bean", (player, bean) => {
    bean.destroy(); // Remove the bean when collected
    counter++;
    if (counter === 5) {
      const totalTime = Math.floor((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
      k.go("gameover", { totalTime }); // Go to the "gameover" scene when all beans are collected
    }
  });
});

// Define the "gameover" scene
k.scene("gameover", ({ totalTime }) => {
  const gameOverObject = k.add([
    k.text(
      `You collected all beans in ${totalTime} seconds! Press R to Restart`,
      {
        size: 40,
      }
    ),
    k.pos(100, 100),
  ]);

  gameOverObject.color = k.rgb(255, 20, 150);

  // Listen for the R key to restart the game
  k.onKeyPress("r", () => {
    k.go("start");
  });
});

// Load the bean sprite
k.loadRoot("./");
k.loadSprite("bean", "sprites/bean.png");

// Start the game at the "start" scene
k.go("start");
