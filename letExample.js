/* ---------- function expression ----------
let y = 10;
let letExample = function () {
  if (true) {
    console.log("yInner =", y); // output: y = 10
  }
  console.log("yOuter =", y); // output: y = 10
};

letExample();
---------- */

/* ---------- for loop ----------
let y = 10;
if (true) {
  console.log("yInner =", y); // output: y = 10
}
console.log("yOuter =", y); // output: y = 10
for (let i = 0; i <= y; i++) {
  console.log("yLoop", i); // output: from y = 0 to y = 10
}
---------- */
