import { sample, range, each } from 'lodash';
import resize from './utils/resizeWindow';
import createNoise from './utils/createNoise';

const canvas = document.getElementById('canvas');

resize.onResize(resize.setHeight);
resize.setHeight(window.innerWidth, window.innerHeight);

// Ideally this would only be 1 px, but 5 is more performant
const statSize = 5;

function staticFrame(ctx) {
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
    staticFrame(ctx);
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
