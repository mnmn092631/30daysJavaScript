const form = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

form.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('input[type="text"]').value;
  const item = { text, done: false };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  if (plates.length === 0) {
    platesList.innerHTML = "<li>Loading Tapas...</li>";
  } else {
    platesList.innerHTML = plates
      .map((plate, i) => {
        return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}"
      ${plate.done ? "checked" : ""} />
      <label for="item${i}">${plate.text}</label>
      <button type="button" data-index=${i} onClick="deleteItem(event)">X</button>
    </li>
    `;
      })
      .join("");
  }
}

function toggleDone(e) {
  if (!e.target.matches("input")) {
    return;
  }
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem(items, JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteItem(event) {
  const deleteIndex = event.target.dataset.index;
  items.splice(deleteIndex, 1);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
