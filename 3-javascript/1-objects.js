// creating an object

const person = {
  id: 123,
  firstName: "cristian",
  lastName: "penarrieta",
  age: 35,
  email: "c.penarrieta@northeastern.edu",
  "weird-key+": "weird value",
  kids: [
    {
      name: "clara",
      age: 5,
    },
    {
      name: "Francisco",
      age: 2,
    },
    {
      name: "Felipe",
      age: 0,
    },
  ],
  getFullName: function () {
    // return this.firstName + " " + this.lastName
    return `${this.firstName} ${this.lastName}`;
  },
};

// accessing object values
console.log("1 ========== ========== =========");
console.log(person.firstName); //cristian
console.log(person["firstName"])
console.log(person["weird-key+"]);
console.log(person.kids); // returns the kids array
console.log(person.kids[0].name); // clara
console.log(person.kids[1].name); // francisco
console.log(person.getFullName());

// updating values
console.log("2 ========== ========== =========");
person.age = 40;
person.address = 'my home address ......';
console.log(person.age);
console.log(person.address);

// // // creating new fields after object creation
console.log("3 ========== ========== =========");
person.location = "Vancouver";
console.log(person.location);

// // // creates an object based on the fields from another object
console.log("4 ========== ========== =========");
const person2 = { ...person, firstName: "Rui", lastName: "Wang" };
console.log(person2.firstName);
console.log(person2.kids);
console.log(person2.email);
person2.weight = 55
console.log(person2)


// // More info on this
// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics