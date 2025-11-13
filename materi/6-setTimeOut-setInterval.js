"use strict";
// setTimeout dan setInterval
// 1. setTimeout
/*
    PATTERN : setTimeout(functionRef, delay, param1, param2, paramN)
*/
// Contoh
function sayHi() {
  console.log("Helloooo");
}

setTimeout(sayHi, 2000);

// 2. clearTimeout
let timerId = setTimeout(() => console.log("Never Happens"), 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);

// 3. setInterval
/*
    PATTERN : setInterval(functionRef, delay, param1, param2, paramN)
*/
let timerId2 = setInterval(() => console.log("tick"), 1000);
setTimeout(() => {
  clearInterval(timerId2);
  console.log("stop");
}, 5000);

let timerId3 = setTimeout(function tick() {
  console.log("tick");
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

setTimeout(() => {
  clearTimeout(timerId3);
  console.log("stop");
}, 1000);
