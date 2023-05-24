const todoForm = document.querySelector(".todo-form");
const list = document.querySelector(".list");

// We need an array to hold our state
let items = [];

function updateItems() {
  const html = items
    .map((item) => {
      return `
        <li class="todo-item">
            <input value="${item.id}" type="checkbox" 
              ${item.completed ? "checked" : ""}  
            />
            <span class="itemName">${item.name}</span>
            <button class="remove-item" value="${item.id}"> X </button>
        </li>`;
    })
    .join("");

  // console.log(html);

  list.innerHTML = html;

  saveToLocalStorage()
}

function handleSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget.item.value;

  if (!name) return;

  console.log("from submit", name);

  const item = {
    id: Date.now(), // one quick way to generate a random unique id
    name: name,
    completed: false,
  };

  items.push(item);

  console.log("items", items);

  e.currentTarget.reset();

  updateItems();
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  updateItems();
}

function toogleItem(id) {
  const itemToToogle = items.find((item) => item.id === id);
  itemToToogle.completed = !itemToToogle.completed;
  updateItems();
}

list.addEventListener("click", function (e) {
  console.log(e.target)
  const id = parseInt(e.target.value);
  if (e.target.matches("button")) {
    deleteItem(id);
  } else if (e.target.matches('input[type="checkbox"]')) {
    toogleItem(id);
  }
})

todoForm.addEventListener("submit", handleSubmit);

function saveToLocalStorage() {
  console.info("Saving items to localstorage");
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info("Restoring from LS");
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems?.length) {
    items = lsItems;
    updateItems();
  }
}

restoreFromLocalStorage();