const container = document.querySelector(".container");
const arrTop = document.querySelector(".arr-top");
const arrRight = document.querySelector(".arr-right");
const arrBottom = document.querySelector(".arr-bottom");
const arrLeft = document.querySelector(".arr-left");

const myCanvas = document.querySelector("#my-canvas");
let ctx = null;

if (myCanvas.getContext) {
  ctx = myCanvas.getContext("2d");
} else {
  alert("لطفا از مرورگر دیگری استفاده کنید");
}

console.log(ctx);

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 20, 20);

let scale = 20;
let x = 0;
let y = 0;
let sWidth = scale;
let sHeight = scale;

let tg = "";
container.addEventListener("click", (e) => {
  tg = e.target.className;
  console.log(tg);

  // ----------------------------------------------------------------------- to right

  const clearRight = setInterval(() => {
    if (tg == "far fa-arrow-alt-circle-right") {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      x += scale;
      ctx.fillRect(x, y, sWidth, sHeight);

      if (x == myCanvas.width) {
        x = 0;
      }
    } else {
      clearInterval(clearRight);
    }
  }, 1000);

  // --------------------------------------------------------------------------- to bottom
  clearDown = setInterval(() => {
    if (tg == "far fa-arrow-alt-circle-down") {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      y += scale;
      ctx.fillRect(x, y, sWidth, sHeight);

      if (y == myCanvas.height) {
        y = 0;
      }
    } else {
        clearInterval(clearDown)
    }
  }, 1000);

    // --------------------------------------------------------------------------- to left
    clearLeft = setInterval(() => {
        if (tg == "far fa-arrow-alt-circle-left") {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          x -= scale;
          ctx.fillRect(x, y, sWidth, sHeight);
    
          if (x == 0) {
            x = myCanvas.width;
          }
        } else {
            clearInterval(clearLeft)
        }
      }, 1000);


          // --------------------------------------------------------------------------- to up
    clearUp = setInterval(() => {
        if (tg == "far fa-arrow-alt-circle-up") {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          y -= scale;
          ctx.fillRect(x, y, sWidth, sHeight);
    
          if (y == 0) {
            y = myCanvas.height;
          }
        } else {
            clearInterval(clearUp)
        }
      }, 1000);
});
