// creates an array
const faces = ["😃", "😗", "🤡", "🤑", "😵", "🤤", "🙃", "🥳"];
//              0     1     2    3     4     5    6     7

// array length
console.log("1 ========== ========== =========");
console.log(faces.length);

// // Access an Array item using the index position
console.log("2 ========== ========== =========");
console.log(faces[0]); // first item in the array
console.log(faces[1]); // second item in the array
console.log(faces[faces.length - 1]); // last element

// // Loop over an Array
console.log("3 ========== ========== =========");
faces.forEach((face) => {
  console.log(face);
});

// //Add an item to the end of an Array
console.log("4 ========== ========== =========");
faces.push("😬");
console.log(faces);

// // //Add an item to the beginning of an Array
console.log("5 ========== ========== =========");
faces.unshift("🥶");
console.log(faces);

// //Remove an item from the end of an Array
console.log("6 ========== ========== =========");
const lastFace = faces.pop(); // removes "😬" (last element)
console.log(faces);

// //Remove an item from the beginning of an Array
console.log("7 ========== ========== =========");
const firstFace = faces.shift(); // removes "🥶" (first element)
console.log(faces);

// //Find the index of an item in the Array
console.log("8 ========== ========== =========");
console.log(faces.includes("🤡")); // includes is a method to check if an element exist or not
const index = faces.indexOf("🤡"); // returns the index, if not found it will return -1
console.log(faces.indexOf("adfhdfjhdsgf"));
console.log(index);

// //Remove an item by index position
console.log("9 ========== ========== =========");
const removedFace = faces.splice(index, 1); // removes "🤡"
console.log(removedFace);
console.log(faces);

// //copy array
console.log("10 ========== ========== =========");
const copyFaces = [...faces, 1, 2, 3];
console.log(copyFaces);

// // MAP - creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("11 ========== ========== =========");
const facesWithHand = faces.map((f) => {
  return `${f}-👋`;
});
console.log(facesWithHand);

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map((n) => {
  return n * 2;
});
// const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// // // JOIN
console.log("12 ========== ========== =========");
console.log(faces.join("-"));

// // FILTER
console.log("13 ========== ========== =========");
const students = [
  {
    name: "Cristian",
    location: "Vancouver",
    age: 35,
  },
  {
    name: "James",
    location: "Toronto",
    age: 40,
  },
  {
    name: "Garry",
    location: "Vancouver",
    age: 20,
  },
  {
    name: "Rettie",
    location: "Vancouver",
    age: 19,
  },
  {
    name: "Bertha",
    location: "Toronto",
    age: 50,
  },
  {
    name: "Mirian",
    location: "Vancouver",
    age: 33,
  },
];

const studentsFromVancouver = students.filter((student) => {
  return student.location === "Vancouver";
});
console.log(studentsFromVancouver);

const students30Plus = students.filter((student) => {
  return student.age >= 30;
});
console.log(students30Plus);

// // Joining methods
console.log("13 ========== ========== =========");
const studentsFromVancouverAnd30PlusOnlyName = students
  .filter((student) => {
    return student.location === "Vancouver";
  })
  .filter((student) => {
    return student.age >= 30;
  })
  .map((student) => {
    return student.name;
  });
console.log(studentsFromVancouverAnd30PlusOnlyName);

// // More info on this
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
