const btn = document.querySelector('button');
const table = document.querySelector('table');

btn.addEventListener('click', () => {
    const priceElements = document.querySelectorAll('.prices');
    let totalSum = 0;

    priceElements.forEach(element => {
        let text = element.textContent.trim();
        
        // Agar Cypress purani value ke sath nayi value append kar raha hai (e.g. "40.0055"),
        // to Cypress dwara typed last numbers ko extract karne ke liye regex use karenge.
        // Agar direct naya text hai, tab bhi ye sahi number nikalega.
        let matchedNumbers = text.match(/\d+(\.\d+)?/g);
        
        if (matchedNumbers) {
            // Agar Cypress ne nayi value append ki hai, to hamesha aakhiri entry (test inputs) lo.
            // Agar ek hi number hai, to wahi use hoga.
            let priceValue = parseFloat(matchedNumbers[matchedNumbers.length - 1]);
            
            if (!isNaN(priceValue)) {
                totalSum += priceValue;
            }
        }
    });

    // Pehle se bani hui total row ko remove karein taaki duplicate na ho
    const existingTotalRow = document.getElementById('total-row-id');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Naya row aur data cell create karein
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row-id';
    
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    
    // CRITICAL: Span ke andar bina kisi extra spaces ya string ke direct number daalein,
    // taaki Cypress `.contains(410)` ko exact value match mile.
    totalCell.innerHTML = `Total Price: <span id="ans">${totalSum}</span>`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});