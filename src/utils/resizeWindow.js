export function onResize(fn) {
  window.onresize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    fn(width, height);
  };
}

export function setHeight(width, height) {
  canvas.width = width;
  canvas.height = height;
}
