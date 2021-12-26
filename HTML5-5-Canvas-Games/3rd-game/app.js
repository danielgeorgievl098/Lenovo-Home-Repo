let canvas;
let ctx;
let flowField;
let flowFieldAnimation;
window.onload = function () {
  canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.prepend(canvas);
  ctx = canvas.getContext('2d');

  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);

  flowField.animate(0);
};

window.addEventListener('resize', () => {
  cancelAnimationFrame(flowFieldAnimation);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
});

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class FlowFieldEffect {
  #ctx;
  #width;
  #height;

  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = 'white';
    this.#ctx.lineWidth = 1;
    this.#width = width;
    this.#height = height;
    this.lastTime = 0;
    this.cellSize = 8;
    this.gradient;
    this.#createGradient();
    this.#ctx.strokeStyle = this.gradient;
    this.radius = 0;
    this.vr = 0.03;
  }

  #createGradient() {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );
    this.gradient.addColorStop('0.1', '#ff5c33');
    this.gradient.addColorStop('0.2', '#ff66b3');
    this.gradient.addColorStop('0.4', '#ccccff');
    this.gradient.addColorStop('0.6', '#b3ffff');
    this.gradient.addColorStop('0.8', '#80ff80');
    this.gradient.addColorStop('0.9', '#ffff33');
  }

  #draw(angle, x, y) {
    let positionX = x;
    let positionY = y;
    let dx = mouse.x - positionX;
    let dy = mouse.y - positionY;
    let distance = dx * dx + dy * dy;
    if (distance > 500000) distance = 500000;
    else if (distance < 100000) distance = 1000000;

    let length = distance / 10000;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(
      x + Math.cos(angle) * length,
      y + Math.sin(angle) * length
    );
    this.#ctx.stroke();
  }

  animate() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.radius += this.vr;
    //THIS IS THE BEST WAY TO FLIP SOMETHING(FOR ALL USES AND PURPOSES)
    if (this.radius > 10 || this.radius < -10) this.vr *= -1;

    for (let y = 0; y < this.#height; y += this.cellSize) {
      for (let x = 0; x < this.#width; x += this.cellSize) {
        const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
        this.#draw(angle, x, y);
      }
    }

    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}
