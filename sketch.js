var a = prompt('Enter the first number');
var b = prompt('Enter the second number');
[a,b] = [b,a];
console.log("the value for a:"+a);
console.log("the value for b:"+b);
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
}