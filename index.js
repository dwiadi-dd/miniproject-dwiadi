console.log("connect3");

const addForm = document.querySelector(".addForm");
const inventoryTable = document.getElementById("inventoryTable");
const item = document.getElementById("item");
const amount = document.getElementById("amount");

//this num var used for counter item limit
let num = 0;

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (num >= 5) {
    window.alert(
      "you already reach the limit, remove item if you want to add other items"
    );
  } else {
    addData(item.value, amount.value);
  }

  resetForm();
  item.focus();
  num++;
});

const resetForm = () => {
  item.value = "";
  amount.value = "";
};

const addData = (item, amount) => {
  const row = inventoryTable.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  // Add some text to the new cells:
  cell1.innerHTML = item;
  cell2.innerHTML = amount;
  cell3.innerHTML = Math.floor(Math.random() * 10) * 1000;
  cell4.innerHTML = `<button class="trash">X</button>  `;
};

// delete list item
inventoryTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

// rupiah formatter
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
