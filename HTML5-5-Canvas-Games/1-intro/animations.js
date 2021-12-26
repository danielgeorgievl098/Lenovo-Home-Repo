const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// window.requestAnimationFrame(draw);

// const position = { x: canvas.width / 6, y: canvas.height / 6, speed: 5 };

// function draw() {
//   //moves it accross the x axis
//   position.x += position.speed;

//   //checks if we've reacher end of screen
//   if (position.x > canvas.width) {
//     position.x = 0;
//   }
//   createImage();
//   window.requestAnimationFrame(draw);
// }
// function createImage() {
//   //clears the entire canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   //creates circle
//   ctx.fillStyle = 'red';
//   ctx.beginPath();
//   ctx.arc(position.x, position.y, 100, 0, 2 * Math.PI);
//   ctx.fill();
//   console.log(position.x);
// }

/////////////////////////////////SPINNING IMG
let img = new Image();
img.src =
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/08/cirlcemountain-e1565066585892.jpg?auto=format&q=60&fit=max&w=930';
img.width = '150';

let angleRotation = 0;

img.onload = function () {
  // this = img, so basically a copy
  let cache = this;

  setInterval(() => {
    ctx.save();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(cache.width, cache.height);
    ctx.rotate((Math.PI / 180) * (angleRotation += 5));
    ctx.drawImage(img, -cache.width / 100, -cache.height / 100);

    ctx.restore();
  }, 40);
};
