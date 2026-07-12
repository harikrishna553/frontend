import kaplay from "kaplay";

const k = kaplay();

k.setGravity(1000);

k.loadSprite("bean", "sprites/bean.png");

const player = k.add([k.pos(120, 80), k.sprite("bean"), k.body(), k.area()]);

const ground = k.add([
  k.rect(k.width(), 100),
  k.pos(0, 700),
  k.area(),
  k.outline(3),
  k.color(109, 99, 19), // Brown-like color for the ground
  k.body({ isStatic: true }),
]);

// Function to create and fire a bullet
function fireBullet() {
  const bullet = k.add([
    k.pos(player.pos.x + player.width / 2 - 5, player.pos.y), // Position at player's top center
    k.circle(10), // Bullet size
    k.color(255, 0, 0), // Red bullet color
    k.area(),
  ]);

  // Move bullet upwards in the update loop
  bullet.onUpdate(() => {
    bullet.move(0, -400); // Move up with a speed of 600 units per second

    // Destroy the bullet if it goes off-screen
    if (bullet.pos.y < -10) {
      bullet.destroy();
    }
  });
}

// Event listener for space key press
player.onKeyPress("space", () => {
  if (player.isGrounded()) {
    fireBullet();
  }
});

// Define smooth horizontal movement for the player
// Move left when the left arrow key is held down
player.onKeyDown("left", () => {
  player.move(-300, 0); // Move left with a speed of 300
});

// Move right when the right arrow key is held down
player.onKeyDown("right", () => {
  player.move(300, 0); // Move right with a speed of 300
});

// Add screen boundaries to prevent the player from moving off the screen
player.onUpdate(() => {
  if (player.pos.x < 0) {
    player.pos.x = 0; // Prevent moving off the left edge
  }
  if (player.pos.x > k.width() - player.width) {
    player.pos.x = k.width() - player.width; // Prevent moving off the right edge
  }
});
