let number = parseInt(prompt("یک عدد وارد کنید:"));

// 2. بررسی زوج یا فرد بودن عدد
if (number % 2 === 0) {
  console.log("عدد زوج است.");
} else {
  console.log("عدد فرد است.");
}

// 3. محاسبه مربع عدد
let square = number * number;
console.log("مربع عدد: " + square);

// 4. ایجاد یک آرایه از اعداد تا آن عدد
let array = [];
for (let i = 1; i <= number; i++) {
  array.push(i);
}
console.log("آرایه اعداد: " + array);

// 5. نمایش عدد به صورت معکوس
let reversedNumber = number.toString().split("").reverse().join("");
console.log("عدد معکوس: " + reversedNumber);


