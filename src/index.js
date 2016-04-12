import { sample, range, each } from 'lodash';
import resize from './utils/resizeWindow';
import createNoise from './utils/createNoise';

const canvas = document.getElementById('canvas');

resize.onResize(resize.setHeight);
resize.setHeight(window.innerWidth, window.innerHeight);

// function randHex() {
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += random(16).toString(16);
//   }
//   return color.toUpperCase();
// }

const statSize = 5;

function doSomething(ctx) {
  let width = range(0, window.innerWidth, statSize);
  let height = range(0, window.innerHeight, statSize);

  each(width, x => {
    each(height, y => {
      ctx.fillStyle = sample(['#000000', '#ffffff']);
      ctx.fillRect(x, y, statSize, statSize);
    });
  });
}

function draw(ctx) {
  setInterval(() => {
    doSomething(ctx,
      Math.random() > 0.5,
      Math.random() > 0.95,
      // Math.random() > 0.1
      true
    );
  }, 10);
}

function withCanvas(fn) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    fn(ctx);
  }
}

withCanvas(draw);
createNoise();
