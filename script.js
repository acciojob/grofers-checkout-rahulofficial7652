const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // select all price cells
  const priceElements = document.querySelectorAll(".price");

  let total = 0;

  priceElements.forEach((el) => {
    total += Number(el.textContent);
  });

  // check if total row already exists (avoid duplicates)
  if (document.querySelector(".total-row")) return;

  // create new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
