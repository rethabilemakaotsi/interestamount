

function calculateInterest() {
  
  var amount = parseFloat(document.getElementById('amount').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);


  if (isNaN(amount) || isNaN(interestRate)) {
    alert("Please enter valid numeric values for amount and interest rate.");
    return;
  }

  
  var interestAmount = calculateInterestAmount(amount, interestRate);


  document.getElementById('result').innerHTML = `${interestRate}% of ${amount} is: ${interestAmount.toFixed(2)}`;
}


function calculateInterestAmount(amount, interestRate) {
  
  var interestRateDecimal = interestRate / 100.0;


  var interestAmount = amount * interestRateDecimal;

  return interestAmount;
}

