import resize from './utils/resizeWindow';
const { onResize, setHeight } = resize;
import createNoise from './utils/createNoise';
import onMouseMove from './utils/onMouseMove';

onResize(setHeight);
setHeight(window.innerWidth, window.innerHeight);

let statSize = 3;

onMouseMove((x, y) => {
  statSize = Math.floor(3 + (y / 80));
});

function staticFrame(ctx) {
  // clear the frame
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // for some reason this seems more performant than just
  // using for loops that increment by statSize
  let width = [], height = [];
  for (let x = 0; x < window.innerWidth; x += statSize) {
    width.push(x);
  }
  for (let y = 0; y < window.innerHeight; y += statSize) {
    height.push(y);
  }

  ctx.fillStyle = '#000000';

  width.forEach(x => {
    height.forEach(y => {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, statSize, statSize);
      }
    });
  });
}

function draw(ctx) {
  setInterval(() => {
    staticFrame(ctx);
  }, 15);
}

function withCanvas(can, fn) {
  if (can.getContext) {
    let ctx = can.getContext('2d');
    fn(ctx);
  }
}

const canvas = document.getElementById('canvas');
withCanvas(canvas, draw);
createNoise();
console.log('Source: https://github.com/scyclow/error404')
