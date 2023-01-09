// const message = prompt("Ваше имя?");

// let result;

// if (message.length > maxLength) {
//   result = `${message.slice(0, maxLength)}...`;
// } else {
//   result = message;
// }
// const normalizeMessage = message.toLowerCase();

// const normalizeMessage = message.toLowerCase();
// normalizeMessage.includes("spam") || normalizeMessage.includes("sale");

// if (normalizeMessage.includes("spam") || normalizeMessage.includes("sale")) {
//   result = normalizeMessage;
// }

// result.includes("spam") || result.includes("sale");
// result.includes("spam") || result.includes("sale");

// console.log(result);

// function getExtremeElements(array) {
//   let array = [1, 2, 3, 4, 5]
// }

// function getExtremeElements(array) {
// let arr = [];
// arr.push(array[0]);
// arr.push(array[array.length - 1]);
// return arr;
// }

// function multiply(x, y, z) {
//   x = 5;
//   y = 3;
//   z = 2;
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply();

// function multiply(x, y, z) {
//   console.log("Результатом множення змінних = ");
//   return x * y * z;
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function calculateEngravingPrice(message, pricePerWord) {
//   message = "JavaScript is in my blood";
//   let messageSplit = message.split(" ");
//   pricePerWord = 10;
//   let summ = messageSplit.length;

//   // console.log(messageSplit);
//   // console.log(pricePerWord);
//   // console.log(summ);
//   console.log(summ * pricePerWord);
//   return summ * pricePerWord;
// }
// calculateEngravingPrice();

// function slugify(title) {
//   title = "Arrays for begginers";
//   let slugSplit = title.split(" ");
//   let slug = slugSplit.join("-");
//   console.log(slug.toLowerCase());
//   return slug.toLowerCase();
// }
// slugify();

// function calculateTotal(number) {
//   const number = 20;
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += 1;
//     console.log(sum);
//   }
//   return sum;
// }
// calculateTotal();

// const number = 3;
// let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//   sum += i;
//   console.log(sum);
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ---------------------------------------------Питання

// function findLongestWord(string) {
//   // Change code below this line
//   string = "The quick brown fox jumped over the lazy dog";
//   const stringParts = string.split(" ");
//   let longestWord = stringParts[0];

//   for (const stringPart of stringParts) {
//     if (longestWord.length < stringPart.length) {
//       longestWord = stringPart;
//     }

//     // console.log(stringParts);
//     // console.log(stringPart.length);
//     // console.log(longestWord.length);
//   }
//   console.log(longestWord);
//   // Change code above this line
// }
// findLongestWord();
// ---------------------------------------------Питання

// function createArrayOfNumbers(min, max) {
//   max = 8;
//   min = 1;
//   let params = [min, max];
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
// }
// createArrayOfNumbers();

function filterArray(numbers, value) {
  // Change code below this line
  numbers = [12, 24, 8, 41, 76];
  value = 38;
  let arr = [];

  for (number of numbers) {
    if (value < number) {
      arr.push(number);
      // console.log(number);
    }
  }
  console.log(arr);

  // Change code above this line
}
filterArray();
