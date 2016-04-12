import x from './utils/resizeWindow';

const canvas = document.getElementById('canvas');
console.log(x)
x.onResize(x.setHeight);
x.setHeight(window.innerWidth, window.innerHeight)

function doSomething(ctx, a, b, c, adj) {
  // if (a) ctx.fillRect(25*adj, 25*adj, 100*adj, 100*adj);
  // if (b) ctx.clearRect(45*adj, 45*adj, 60*adj, 60*adj);
  if (b) ctx.clearRect(0, 0, 800, 800);
  if (c) ctx.strokeRect(50*adj, 50*adj, 50*adj, 50*adj);
}

function draw(ctx) {
  setInterval(() => {
    doSomething(ctx,
      Math.random() > 0.5,
      Math.random() > 0.95,
      Math.random() > 0.5,
      Math.random() * 5.5
    )
  }, 1)
}

function withCanvas(fn) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    fn(ctx);
  }
}

withCanvas(draw)
