const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let taxAsDecimal;
let startingAfterTax;
let balance;

let taxAsInt = parseInt(tax);

if (
  typeof hourOfDay &&
  typeof minuteOfDay !== undefined &&
  hourOfDay === 00 &&
  minuteOfDay === 00
) {
  taxAsDecimal = taxAsInt / 100;
  taxWorkedOut = taxAsDecimal * salary;
  startingAfterTax = salary - taxWorkedOut;
  balance = startingAfterTax - transport - food - rent;
}
console.log(balance.toFixed(2));
