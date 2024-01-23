//function to Calc and display tip, total bill and amount per person
function calculateAndDisplay(){
    // Get the values from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let qualOfService = document.getElementById('serviceQuality').value

    // Calculate tip, total bill, & amount per person
    let tip = calculateTip(bill, qualOfService)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calculateAmtPerPerson(totalBill, numOfPpl)

    // Display results in the HTML
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPerson.toFixed(2)
}