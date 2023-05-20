function outer() {
  const outerVar = "I am the outer Var!";
  function inner() {
    const innerVar = "I am an inner var!";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

// returns error
// console.log(outerVar)

const innerFn = outer();
innerFn();

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting("hello");
const sayHey = createGreeting("hey");
console.log(sayHello("Cris"));
console.log(sayHello("Mirian"));
console.log(sayHey("Clara"));
console.log(sayHey("Mirian"));


function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Game ${gameName} score is ${score}`;
  };
}

const basketballGame = createGame("Basket");
const soccerGame = createGame("Soccer");

console.log(basketballGame());
console.log(soccerGame());
console.log(basketballGame());
console.log(soccerGame());
console.log(basketballGame());
console.log(soccerGame());

// // // More info on this
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// // // demo inspired https://github.com/wesbos/beginner-javascript
