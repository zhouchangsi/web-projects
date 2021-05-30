"use strict"; // Defines that JavaScript code should be executed in "strict mode".

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 300;
const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
function initializeGL() {

  if (gl !== null) {
    console.log(gl);
    gl.clearColor(0.0, 0, 0.0, 1.0);  // set the color to be cleared
  } else {
    alert("WebGL is not supported!");
  }
}
function clearCanvas() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear to the color previously set
}
function doGLDraw() {
  initializeGL();
  clearCanvas();
}
// window.onload = doGLDraw();
function initSquareBuffer() {
  var verticesOfSquare = [
    1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, -1, 0
  ];

  var SquareVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, SquareVertexBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gl.STATIC_DRAW);
}