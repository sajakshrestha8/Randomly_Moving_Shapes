let box2 = document.getElementById("box2");
let box1 = document.getElementById("box1");

var h = window.innerHeight - 50;

console.log(h);

let viewWidth = window.innerWidth - 200;
let viewHeight = window.innerHeight - 200;
console.log(viewWidth);
console.log(viewHeight);

setInterval(() => {
  //box 1
  box1.style.left = Math.floor(Math.random() * viewWidth) + "px";
  box1.style.top = Math.floor(Math.random() * viewHeight) + "px";
  // console.log(Math.floor(Math.random() * 1000));

  //box 2
  box2.style.left = Math.floor(Math.random() * viewWidth) + "px";
  box2.style.top = Math.floor(Math.random() * viewHeight) + "px";
}, 500);

console.log("running");
console.log(box1.offsetLeft);
