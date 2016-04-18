import { onResize, setHeight } from './utils/resizeWindow';
import createNoise from './utils/createNoise';
import onMouseMove from './utils/onMouseMove';

onResize(setHeight);
setHeight(window.innerWidth, window.innerHeight);

const minStatSize = 3;
let statSize = minStatSize;

onMouseMove((x, y) => {
  statSize = Math.floor(minStatSize + (y / 80));
});

function staticFrame(ctx) {
  // clear the frame
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let x = 0; x < width; x += statSize) {
    for (let y = 0; y < height; y += statSize) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, statSize, statSize);
      }
    }
  }
}

function draw(ctx) {
  ctx.fillStyle = '#000000';

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
console.log('Source: https://github.com/scyclow/error404'); // eslint-disable-line
