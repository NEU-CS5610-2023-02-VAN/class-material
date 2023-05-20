console.log("======== Conditionals ========");

const age = 55;
if (age > 70) {
  console.log("In your seventies");
} else if (age > 60) {
  console.log("In your sixties");
} else if (age > 50) {
  console.log("In your 50s");
} else {
  console.log("Nothing was true");
}

// // // ============================
const firstName = "Cris";
const lastName = "Pen";

if (firstName === "William" || (firstName === "Cris" && lastName === "Pen")) {
  console.log("Coool Name!");
}

// // // ============================
const values = [
  [],
  {},
  -10,
  1,
  0,
  "",
  "full string",
  " ",
  undefined,
  NaN,
  null,
  "0️⃣",
  "💩",
];

console.group("truthy or falsy values");
values.forEach((value) => {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
});
console.groupEnd();

// // // // ============================
function showAdminBar() {
  console.log("Showing admin bar");
}
const isAdmin = true;

// isAdmin ? showAdminBar() : null;
// isAdmin && showAdminBar();
if (isAdmin) {
  showAdminBar();
}

// // Loops
console.log("======== Loops ========");
const myName = "Cristian";
for (const letter of myName) {
  console.log(letter);
}

const numbers = [1, 2, 3, 4, 5, 6];
for (const number of numbers) {
  console.log(number);
}

const people = {
  name: "clara",
  age: 4,
  email: "clara@gmail.com",
};

// For in - used for looping over keys of an object
for (const key in people) {
  console.log(`key: ${key} - value: ${people[key]}`);
}

// // While Loop
let cool = true;
let i = 1;
while (cool === true) {
  console.log("You are cool");
  i++;
  if (i > 100) {
    cool = false;
  }
}

// // More info on this
// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
// // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
