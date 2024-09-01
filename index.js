let box2 = document.getElementById("box2");
let box1 = document.getElementById("box1");

var h = window.innerHeight - 50;

console.log(h);

setInterval(() => {
  box1.style.left = box1.offsetLeft + "px";
  //   box1.style.top = box1.offsetTop + 1 + "px";
  //   box2

  if (box1.offsetLeft + box1.offsetWidth >= window.innerWidth) {
    box1.style.top = box1.offsetTop + "px";
    box1.style.left = "none";
  }
}, 100);

console.log("running");
console.log(box1.offsetLeft);
