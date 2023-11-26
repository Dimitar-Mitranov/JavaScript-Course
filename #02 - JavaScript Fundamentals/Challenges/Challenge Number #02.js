/* Write your code below. Good luck! 🙂 */

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bill = 100;
console.log(calcTip(bill));

const bills = new Array(125, 555, 44);
const tips = new Array();

bills.forEach((x) => tips.push(calcTip(x)));
