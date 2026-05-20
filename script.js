// Button element ko select karein
const btn = document.querySelector('button');
const table = document.querySelector('table');

// Ek event listener lagayein button click par
btn.addEventListener('click', () => {
    // 1. Har click par fresh values nikalne ke liye select andar karein
    const priceElements = document.querySelectorAll('.prices');
    let totalSum = 0;

    priceElements.forEach(element => {
        const priceValue = parseFloat(element.textContent);
        if (!isNaN(priceValue)) {
            totalSum += priceValue;
        }
    });

    // 2. Agar pehle se koi total row bani hui hai, to use hata dein (taaki duplicate na ho)
    const existingTotalRow = document.getElementById('total-row-id');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // 3. Naya row aur data cell create karein
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row-id'; // unique id tracking ke liye
    
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    
    // CRITICAL: Total number ko span me 'ans' id ke sath wrap karein taaki test pass ho sake
    totalCell.innerHTML = `Total Price: <span id="ans">${totalSum}</span>`;

    // 4. Table ke andar append karein
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});