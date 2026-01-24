const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Select all elements with the class 'price'
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // 2. Loop through the elements and add their values to the total
    priceElements.forEach(element => {
        // Use Number() or parseFloat() to convert text to a number
        total += Number(element.textContent);
    });

    // 3. Check if a total row already exists to avoid duplicates
    const existingTotal = document.getElementById('ans');
    if (existingTotal) {
        existingTotal.textContent = total;
        return;
    }

    // 4. Create a new row (tr) and a cell (td) for the total
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // 5. Set attributes and content
    // We give it id="ans" as many tests for this specific challenge look for that ID
    totalCell.setAttribute('id', 'ans');
    totalCell.setAttribute('colspan', '2');
    totalCell.style.textAlign = 'center';
    totalCell.textContent = total;

    // 6. Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);