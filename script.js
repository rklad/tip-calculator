//function to Calc and display tip, total bill and amount per person
function calculateAndDisplay(){
    //Get the values from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let qualOfService = document.getElementById('serviceQuality').value

    //Calculate tip, total bill, & amount per person
    let tip = calculateTip(bill, qualOfService)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calculateAmtPerPerson(totalBill, numOfPpl)

    //Display results in the HTML
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPerson.toFixed(2)
}

//Helper function to calculate the tip
function calculateTip(bill, quality) {
    if (quality === 'Great') {
        return bill * .20 //return calculates the bill*.2 and then displays the tip
    } else if (quality === 'Good') {
        return bill * .15
    } else if (quality === 'Poor') {
        return bill *.10
    }
}

function calculateTotalBill(bill, tip){
   return bill + tip
}

function calculateAmtPerPerson(totalBill, numOfPpl){
    return totalBill/numOfPpl
}