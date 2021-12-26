const canvas = document.createElement('canvas');
const grid = 30;
const ctx = canvas.getContext('2d');

canvas.setAttribute('width', grid * 20);
canvas.setAttribute('height', grid * 15);
canvas.style.border = '1px solid black';
document.body.prepend(canvas);

const btn = document.createElement('button');
btn.textContent = 'Turn On';
btn.style.backgroundColor = 'red';
btn.style.color = 'white';
btn.style.padding = '7px';
document.body.append(btn);
btn.addEventListener('click', (e) => {
  if (!mind.thinking) {
    mind.thinking = true;
    btn.textContent = 'Turn Off';
    btn.style.backgroundColor = 'green';
  } else {
    mind.thinking = false;
    btn.textContent = 'Turn On';
    btn.style.backgroundColor = 'red';
  }
});

const game = { req: '', bullets: [], bulletSpeed: 5 };
const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  KeyA: false,
  KeyD: false,
  KeyW: false,
  KeyS: false,
};
const players = [
  {
    x: canvas.width / 2 + grid * 8,
    y: canvas.height / 2,
    size: grid / 2 + 15,
    speed: 5,
    color: 'red',
    cooldown: 0,
    score: 0,
    position: canvas.width / 2 + canvas.width / 4,
  },
  {
    x: canvas.width / 2 - grid * 8,
    y: canvas.height / 2,
    size: grid / 2 + 15,
    speed: 5,
    color: 'blue',
    cooldown: 0,
    score: 0,
    position: canvas.width / 4,
  },
];

const mind = {
  thinking: false,
  dirY: 5,
  dirX: 0,
  count: 0,
};

document.addEventListener('keydown', (e) => {
  //makes sure we're not tracking uncessecary keys
  if (e.code in keys) keys[e.code] = true;
  //sets the key's value as true once we press it
  if (e.code === 'Space' && players[0].cooldown <= 0) {
    players[0].cooldown = 20;

    game.bullets.push({
      x: players[0].x - players[0].size - 15,
      y: players[0].y - 2,
      speed: -game.bulletSpeed,
      size: grid / 3,
      color: 'purple',
    });
  }
  if (e.code === 'KeyD' && players[1].cooldown <= 0) {
    players[1].cooldown = 20;

    game.bullets.push({
      x: players[1].x + players[1].size + 15,
      y: players[1].y - 2,
      speed: game.bulletSpeed,
      size: grid / 3,
      color: 'pink',
    });
  }
});
document.addEventListener('keyup', (e) => {
  //makes sure we're not tracking uncessecary keys
  if (e.code in keys) keys[e.code] = false;
  //sets key's value to false once we release it
  //keeps track of when we press and release the key so we can apply movement accordingly
});

const playerMovement = function () {
  if (mind.thinking) {
    if (mind.count > 0) {
      mind.count--;
    } else {
      mind.count = 10;
      let value = Math.floor(Math.random() * 20);
      let dirX = Math.floor(Math.random() * 7);
      let shootTime = Math.floor(Math.random() * 2);
      if (shootTime === 1 && players[1].cooldown <= 0) {
        game.bullets.push({
          x: players[1].x + players[1].size + 15,
          y: players[1].y - 2,
          speed: game.bulletSpeed,
          size: grid / 3,
          color: 'pink',
        });
      }
      if (dirX === 1) {
        mind.dirX = -1;
      } else if (dirX === 2) {
        mind.dirX = 1;
      } else {
        mind.dirX = 0;
      }

      if (players[1].y + value < players[0].y) {
        mind.dirY = players[1].speed;
      } else if (players[1].y + value > players[0].y) {
        mind.dirY = -players[1].speed;
      }
    }

    if (
      players[1].y > 0 &&
      players[1].y - players[1].size / 2 < canvas.height
    ) {
      players[1].y += mind.dirY;
    } else {
      mind.dirY *= -1;
      mind.count = 10;
      players[1].y += mind.dirY;
    }
    players[1].x += mind.dirX;
    // if (players[1].y + value < players[0].y) {
    //   players[1].y += players[1].speed;
    // } else if (players[1].y + value > players[0].y) {
    //   players[1].y -= players[1].speed;
    // }
  }
  if (keys['ArrowLeft'] && players[0].x > canvas.width / 2 + players[0].size)
    //PLAYER1
    //incrases x/y according to button-pressed
    players[0].x -= players[0].speed;
  if (keys['ArrowRight'] && players[0].x < canvas.width - players[0].size)
    players[0].x += players[0].speed;
  if (keys['ArrowUp'] && players[0].y > players[0].size)
    players[0].y -= players[0].speed;
  if (keys['ArrowDown'] && players[0].y < canvas.height - players[0].size)
    players[0].y += players[0].speed;

  //PLAYER2
  if (keys['KeyA'] && players[1].x > players[1].size)
    players[1].x -= players[1].speed;
  if (keys['KeyD'] && players[1].x < canvas.width / 2 - players[1].size)
    players[1].x += players[1].speed;
  if (keys['KeyW'] && players[1].y > players[1].size)
    players[1].y -= players[1].speed;
  if (keys['KeyS'] && players[1].y < canvas.height - players[1].size)
    players[1].y += players[1].speed;

  //increases the x-axis coords on each call
};

const collisonCheck = function (a, b) {
  let checkHorizon = a.x < b.x + b.size && a.x + a.size * 2 > b.x;
  let checkVert = a.y < b.y + b.size * 2 && a.y + a.size * 2 > b.y;

  let finalCheck = checkHorizon && checkVert;
  return finalCheck;
};

function drawMove() {
  //clears entire field on call
  ctx.clearRect(0, 0, canvas.width, canvas.width);
  playerMovement();

  //divider line
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  //Draw Bullets
  game.bullets.forEach((bullet, i) => {
    ctx.fillStyle = bullet.color;

    ctx.fillRect(bullet.x, bullet.y, bullet.size, bullet.size);

    bullet.x += bullet.speed;
    //once the bullet has left the screen, it removes it from the arr.
    if (bullet.x < 0) {
      game.bullets.splice(i, 1);
    }

    players.forEach((player, index) => {
      if (collisonCheck(bullet, player)) {
        console.log(players[index].color);
        if (index === 0) players[1].score++;
        if (index === 1) players[0].score++;
        game.bullets.splice(i, 1);
      }
    });
  });

  //draws each player
  players.forEach((player) => {
    if (player.cooldown > 0) player.cooldown--;

    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(player.x, player.y, player.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = `${grid}px sarif`;
    ctx.textAlign = 'center';
    ctx.fillText(`Score: ${player.score}`, player.position, 50);
  });

  //that's an endless recurse func
  game.req = requestAnimationFrame(drawMove);
}
drawMove();
