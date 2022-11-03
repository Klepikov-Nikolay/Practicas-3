let x1 = 2
let y1 = 3

let x2 = 10
let y2 = 5

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
  Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2)
));
//2//
let a = 13.890123;
let b = 2.891564;
let n = 3;

let odin = Math.round(a % 1* Math.pow(10,n));
let dva = Math.round(b % 1* Math.pow(10,n));

console.log(odin, dva);

console.log('', a === b);
console.log('', odin === dva);
console.log('', odin > dva);
console.log('', odin < dva);
console.log('', odin != dva);
console.log('', odin >= dva);
console.log('', odin <= dva);
//3//
let v = 0;
let m = 100;

console.log(Math.round(Math.random() * (m - v) / 2 + v) * 2 + 1);