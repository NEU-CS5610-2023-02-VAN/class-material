class Pizza {
  // constructor
  constructor(toppings = [], customer) {
    // computer instance property
    this.toppings = toppings;
    this.customer = customer;
  }

  // static property
  static toppings = ["pepperoni", "cheese"];

  // prototype method (almost always this)
  eat() {
    console.log("CHOMP");
    console.log(this.toppings);
    console.log(this.slices);
  }

  // instance property
  slices = 10;

  // instance method
  hi = () => {
    console.log("Hiiii");
    console.log(this);
  };

  // Getter Property
  get length() {
    return this.slices;
  }

  // Private Fields can only be modified inside a class
  #bankBalance = 10000;
}

const myPizza = new Pizza(["pinaple", "peperoni"], "Cris");

console.log(myPizza);


// More info on this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// demo inspired https://github.com/wesbos/beginner-javascript