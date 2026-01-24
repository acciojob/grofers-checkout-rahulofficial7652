const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Target the class '.prices' as expected by the test
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // 2. Sum the values
    priceElements.forEach(element => {
        total += Number(element.textContent);
    });

    // 3. Find the table and create a new row
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    
    // 4. Create the cell with the mandatory id="ans"
    const totalCell = document.createElement('td');
    totalCell.setAttribute('id', 'ans');
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = total;

    // 5. Append to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);