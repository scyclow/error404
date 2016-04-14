export default function onMouseMove(fn) {
  document.onmousemove = (e) => {
    const x = e.clientX + window.pageXOffset;
    const y = e.clientY + window.pageYOffset;
    fn(x, y);
  };
}
