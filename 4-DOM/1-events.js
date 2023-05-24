function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}
const hooray = () => console.log("HOORAY!");

const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", hooray);

// butts.removeEventListener("click", handleClick);

// ================================================

function handleBuyButtonClick(e) {
  console.log('button click');

  const button = e.target;
  // console.log(button);
  // console.log(button.textContent);
  // console.log(button.dataset.price);
  // console.log(button.dataset.id);
  // console.log(button.dataset.name);
  // console.log(e.target.matches("button"))
  
  console.log(e.target);
  console.log(e.currentTarget);
  // console.log(e.target === e.currentTarget);
  
  // e.stopPropagation();
}

const buyButtons = document.querySelectorAll("button.buy");

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

// // // ================================================

const pEl = document.querySelector(".p-1");
const div1El = document.querySelector(".div-1");
const div2El = document.querySelector(".div-2");
const div3El = document.querySelector(".div-3");

pEl.addEventListener("click", (e) => {
  console.log("from the P element");
  e.stopPropagation();
});
div1El.addEventListener("click", () => console.log("I'm the div1El"));
div2El.addEventListener("click", () => console.log("I'm the div2El"));
div3El.addEventListener("click", () => console.log("I'm the div3El"));
window.addEventListener("click", function () {
  console.log("window clicked");
});


// // // ================================================

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
});
