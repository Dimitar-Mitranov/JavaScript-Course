const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

const tips = [];
const totals = [];
for (let currentBill = 0; currentBill < bills.length; currentBill++) {
  tips.push(calcTip(bills[currentBill]));
  totals.push(bills[currentBill] + tips[currentBill]);
}

console.log(calcAverage(totals));

function calcAverage(arr) {
  let sum = 0;

  for (let currentNumber in arr) {
    sum += arr[currentNumber];
  }

  return sum / arr.length;
}
