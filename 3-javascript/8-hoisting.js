let age;
console.log(age);
age = 10;

sayHi();

function sayHi() {
  console.log("hey!");
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}


// More info on this
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// demo inspired https://github.com/wesbos/beginner-javascript