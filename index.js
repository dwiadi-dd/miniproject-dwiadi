console.log("connect3");

const addForm = document.querySelector(".addForm");
const inventoryTable = document.getElementById("inventoryTable");
addForm.addEventListener("submit", (e) => {
  const item = document.getElementById("item").value;
  const amount = document.getElementById("amount").value;

  e.preventDefault();
  console.log(item, amount);
  addData(item, amount);
});

const addData = (item, amount) => {
  const row = inventoryTable.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  // Add some text to the new cells:
  cell1.innerHTML = item;
  cell2.innerHTML = amount;
};
