let player, tankSpeed = 2,
  tankSize = 10,
  bulletSpeed = 5,
  bulletSize = 5;
let tanks = [];
let bullets = [];

function setup() {
  createCanvas(800, 500);
  player = new Tank(true, 300, 300, tankSize, 'r');
  for (var i = 0; i < 10; i++)
    tanks.push(new Tank(false,
      random(0, width), random(0, height),
      tankSize, 'r'));
}

function keyPressed() {
  if (keyCode == 32)
    bullets.push(new Bullet(player.x, player.y, bulletSize,
      player.dir, bulletSpeed));
}

function draw() {
  background(220);

  if (keyIsDown(UP_ARROW)) {
    player.y -= tankSpeed;
    player.dir = 'u';
  } else if (keyIsDown(DOWN_ARROW)) {
    player.y += tankSpeed;
    player.dir = 'd';
  } else if (keyIsDown(LEFT_ARROW)) {
    player.x -= tankSpeed;
    player.dir = 'l';
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.x += tankSpeed;
    player.dir = 'r';
  }

  if (bullets.length > 0) {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].render(200, 200, 0);
      if (bullets[i].x < 0 || bullets[i].x > width ||
        bullets[i].y < 0 || bullets[i].y > height)
        bullets.splice(i, 1)
    }
  }

  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, height);

  player.render(random(0,255), random(0,255),random(0,255));
  for (var i = 0; i < tanks.length; i++) 
    tanks[i].render(200,0,0);
}