import { sample, range, each } from 'lodash';
import resize from './utils/resizeWindow';
import createNoise from './utils/createNoise';
import onMouseMove from './utils/onMouseMove';

const canvas = document.getElementById('canvas');

resize.onResize(resize.setHeight);
resize.setHeight(window.innerWidth, window.innerHeight);

let statSize = 5;

onMouseMove((x, y) => {
  statSize = Math.floor(3 + (y / 80));
});

function staticFrame(ctx) {
  // clear the frame
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  let width = range(0, window.innerWidth, statSize);
  let height = range(0, window.innerHeight, statSize);
  ctx.fillStyle = '#000000';

  each(width, x => {
    each(height, y => {
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

function withCanvas(fn) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    fn(ctx);
  }
}

withCanvas(draw);
createNoise();
