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

// function filterArray(numbers, value) {
//   // Change code below this line
//   numbers = [12, 24, 8, 41, 76];
//   value = 38;
//   let arr = [];

//   for (number of numbers) {
//     if (value < number) {
//       arr.push(number);
//       // console.log(number);
//     }
//   }
//   console.log(arr);

//   // Change code above this line
// }
// filterArray();

// function checkFruit(fruit) {
//   fruit = "apple";
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }
// checkFruit();

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини
//  в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які
//  присутні в обох вихідних масивах.
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   array1 = [1, 2, 3];
//   array2 = [2, 1, 17, 19];
//   console.log(array1);
//   console.log(array2);
//   let newArray = [];
//   // [12, 27, 3]
//   for (const arrItem of array1) {
//     if (array2.includes(arrItem)) {
//       newArray.push(arrItem);
//       // console.log(arrItem);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }
// console.log(getCommonElements());

// Виконай рефакторинг коду функції calculateTotalPrice(order),
// замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   order = [3, 5, 8];
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice());

// Виконай рефакторинг функції filterArray(numbers, value),
// замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   numbers = [1, 2, 3, 4, 5];
//   value = 2;
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   for (number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray());

// Напиши функцію getEvenNumbers(start, end), яка повертає
// масив усіх парних чисел від start до end. Парним вважається
// число, яке ділиться на 2 без остачі (10 % 2 === 0).
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]

// function getEvenNumbers(start, end) {
//   start = 3;
//   end = 11;
//   let newArray = [];
//   // Change code below this line
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }

//     // console.log(newArray);
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// console.log(getEvenNumbers());

// Виконай рефакторинг функції findNumber(start, end, divisor) таким
// чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   // let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       // number = i;
//       // break;
//       return i;
//     }
//   }

//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));

// Напиши функцію includes(array, value), яка робить те саме,
//  що і метод масиву масив.includes(значення) - перевіряє, чи
//  присутнє в масиві array значення value, повертаючи true, якщо
//  присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна
// використовувати метод масив.includes(значення).
// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// повертає true

// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//   // Change code below this line
//   array = ["Earth", "Mars", "Venus", "Jupiter", "Saturn", "Jupiter"];
//   value = "Jupiter";
//   // for (let i = 0; (i = array.indexOf(value)); i += 1)
//   for (let item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes());

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);
// console.log(apartment);

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті
// у нього були дві властивості: email і password, імена яких зберігаються у
// змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
//  а значенням властивості password - рядок "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Виконай рефакторинг рішення попереднього завдання, додавши в
// цикл for...in перевірку на власну властивість.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// // Change code below this line

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     console.log(apartment.hasOwnProperty(key));
//     keys.push(key);
//     values.push(apartment[key]);
//     console.log(key);
//     console.log(apartment[key]);
//   }

//   // Change code above this line
// }

// Напиши функцію countProps(object), яка рахує і повертає
// кількість власних властивостей об'єкта в параметрі object.
//  Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//   object = { mail: "poly@mail.com", isOnline: true, score: 500 };
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = propCount + 1;
//     }
//   }
//   console.log(propCount);
//   console.log(object);
//   // Change code above this line
//   return propCount;
// }
// countProps();

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Вбудований клас Object має кілька корисних методів для роботи з
//  об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і
//  повертає масив ключів його власних властивостей.Якщо в об'єкті немає
//  властивостей, метод поверне порожній масив

// Завдання 14/41
//

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//   можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

function countProps(object) {
  object = { mail: "poly@mail.com", isOnline: true, score: 500 };
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  console.log(propCount);
  return propCount;
  // Change code above this line
}
countProps();
