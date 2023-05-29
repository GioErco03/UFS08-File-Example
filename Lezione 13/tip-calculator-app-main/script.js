const input = document.getElementById('bill');
const percentageInput = document.getElementById('percentual');
const tipOutput = document.querySelector('.cash:first-of-type');
const totalOutput = document.querySelector('.cash:last-of-type');
const btn5 = document.getElementById('btn5');
const btn4 = document.getElementById('btn4');
const btn3 = document.getElementById('btn3');
const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const customInput = document.getElementById('custom_input');
let selectedPercentage = 0;

function getTipPercentage() {
  if (customInput.value) {
    return Number(customInput.value);
  }
  return selectedPercentage;
}

function calculateTip() {
  const bill = Number(input.value);
  const tipPercentage = getTipPercentage();
  const tipAmount = (bill * tipPercentage) / 100;
  const totalAmount = bill + tipAmount;
  const numberOfPeople = Number(document.getElementById('people').value);
  const tipPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = totalAmount / numberOfPeople;

  if (tipOutput) {
    tipOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
  }

  if (totalOutput) {
    totalOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

function selectPercentage(btn, percentage) {
  btn.addEventListener('click', function() {
    selectedPercentage = percentage;
    calculateTip();
  });
}

selectPercentage(btn5, 50);
selectPercentage(btn4, 25);
selectPercentage(btn3, 15);
selectPercentage(btn2, 10);
selectPercentage(btn1, 5);

customInput.addEventListener('input', function() {
  selectedPercentage = Number(customInput.value);
  calculateTip();
});

input.addEventListener('input', calculateTip);
document.getElementById('people').addEventListener('input', calculateTip);

document.getElementById('reset').addEventListener('click', function() {
  input.value = '';
  customInput.value = '';
  document.getElementById('people').value = '';
  selectedPercentage = 0;
  calculateTip();
});