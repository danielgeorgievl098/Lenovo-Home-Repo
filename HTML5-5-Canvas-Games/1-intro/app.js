const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

///////////////////////RECTANGLES
// ctx.fillStyle = 'blue';
// //(x, y, width, height)
// ctx.fillRect(100, 100, 300, 300);

// ctx.strokeRect(90, 90, 320, 320); //draws an outline of rect

// ctx.clearRect(150, 150, 200, 200); //clears given are

// ctx.fillStyle = '#f0f000';
// ctx.fillRect(50, 50, 70, 70);

// ctx.fillStyle = '#0f0'; //green
// ctx.fillRect(250, 250, 70, 70);

// ctx.fillStyle = 'rgba(255,0,255,1)'; //purple
// ctx.fillRect(270, 270, 70, 70);

///////////////////////LINES

// // ctx.beginPath(300, 300);
// ctx.moveTo(50, 400); //move pen
// ctx.lineTo(50, 100); //draws a line
// ctx.lineTo(500, 100); //draws a line
// ctx.lineTo(500, 400); //draws a line
// ctx.lineTo(50, 400); //draws a line
// ctx.stroke(); //applies the shape by drawing

// ///////////////////////CIRCLES
// ctx.beginPath();
// //arc(x,y,radius,startAngle,endAngle,anticlockwise)
// ctx.arc(320, 320, 100, 0, 2 * Math.PI);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(270, 320, 20, 0, 2 * 3.14);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(350, 320, 20, 0, 2 * 3.14);
// ctx.stroke();

///////////////////////MORE LINES
// for (let i = 0; i < 10; i++) {
//   ctx.lineWidth = 1 * i;
//   ctx.lineCap = 'round';
//   ctx.beginPath();
//   ctx.moveTo(100, 50 + i * 50);
//   ctx.lineTo(400, 50 + i * 50);
//   ctx.stroke();
// }

// ctx.moveTo(100, 10);
// ctx.lineTo(200, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(200, 300);
// ctx.lineTo(100, 400);
// ctx.lineTo(200, 500);
// ctx.stroke();

///////////////////////IMAGES
// const myImage = document.querySelector('img');
// myImage.width = 200;

// ctx.drawImage(myImage, 50, 50, 250, 250);
// myImage.style.display = 'none';

///////////////////////////SCALING
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'red';
for (let i = 1; i < 10; i++) {
  ctx.save();
  let tog = i % 2 ? -1 : 1;
  ctx.scale(tog, 1);
  ctx.fillText('counter:' + i, 350 * tog, 200 + 40 * i);
  ctx.restore();
}
