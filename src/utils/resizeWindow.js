const onResize = (fn) => {
  window.onresize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    fn(width, height);
  };
};

const setHeight = (width, height) => {
  canvas.width = width;
  canvas.height = height;
};

export default { onResize, setHeight };
