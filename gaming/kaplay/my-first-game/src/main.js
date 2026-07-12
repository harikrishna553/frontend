import kaplay from "kaplay";

const k = kaplay({
  width: 1000,
  height: 750,
});

k.loadBean();

k.setGravity(2000);
let gameOver = false;

const player = k.add([
  k.sprite("bean"),
  k.pos(k.center()),
  k.area(),
  k.body(),
  k.offscreen(),
]);

player.onExitScreen(() => {
  k.add([k.text("Game Over.....")]);
  gameOver = true;
});

player.onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump();
  }
});

k.add([
  k.rect(k.width(), 300),
  k.pos(0, 500),
  k.area(),
  k.outline(3),
  k.body({
    isStatic: true,
  }),
]);

let counter = 0;

const counterUI = k.add([k.text("0")]);

// It calls the function for every 1 second.
k.loop(1, () => {
  if (gameOver) {
    return;
  }
  counter++;
  counterUI.text = counter;
  k.add([
    k.rect(50, 50),
    k.pos(100, 300),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(1, 0), 200),
  ]);
});
