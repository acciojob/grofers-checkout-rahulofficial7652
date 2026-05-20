// 1. Saare price elements ko unki class se select karein
const priceElements = document.querySelectorAll('.prices');

let totalSum = 0;

// 2. Loop chala kar har price text ko number me badlein aur plus karein
priceElements.forEach(element => {
    const priceValue = parseFloat(element.textContent);
    
    // Agar value number hai to total me jodh dein
    if (!isNaN(priceValue)) {
        totalSum += priceValue;
    }
});

// 3. Table ke tbody ya main table element ko select karein
const table = document.querySelector('table');

// 4. Ek naya row (tr) aur data cell (td) create karein
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Beautiful presentation ke liye CSS class lagayein
totalRow.classList.add('total-row');

// 5. Naye cell me text aur total value set karein
// .toFixed(2) se decimal ke baad hamesha 2 digits dikhengi (e.g., 200.50)
totalCell.textContent = `Total Price: ₹${totalSum.toFixed(2)}`;

// 6. Cell ko table ki dono columns par stretch karne ke liye colspan dein
totalCell.setAttribute('colspan', '2');

// 7. Cell ko row me aur row ko table ke end me jod dein
totalRow.appendChild(totalCell);
table.appendChild(totalRow);