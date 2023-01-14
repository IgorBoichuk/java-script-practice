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

// Завдання 14/41  --------------------------------------------------------------
//

// Виконай рефакторинг функції countProps(object), використовуючи метод
// Object.keys() і,
//   можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//   object = { mail: "poly@mail.com", isOnline: true, score: 500 };
//   // Change code below this line

//   const propCount = Object.keys(object);

//   // for (const key of propCount) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   // console.log(itemsObject);
//   // console.log(propCount);
//   console.log(propCount.length);
//   return propCount.length;
//   // Change code above this line
// }
// countProps();
//
// -------------------------------------------------------------------------------

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт
// зарплат, де ім'я властивості - це ім'я співробітника, а значення
// властивості - це зарплата. Функція повинна розрахувати загальну
// суму зарплат співробітників і повернути її. Використовуй змінну
// totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   salaries = { mango: 100, poly: 150, alfred: 80 };
//   // Change code below this line
//   for (const item of Object.values(salaries)) {
//     totalSalary += item;
//   }

//   console.log(Object.values(salaries));

//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary();

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex, а
// в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(hexColors);
//   console.log(rgbColors);
// }

//

// Напиши функцію getProductPrice(productName), яка приймає один
// параметр productName - назва продукту. Функція шукає об'єкт продукту
//  з таким ім'ям (властивість name) в масиві products і повертає його
//  ціну (властивість price). Якщо продукт з такою назвою не знайдений,
//   функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   productName = "Droid";
//   for (const item of products) {
//     // console.log(item);
//     // console.log(item.name);
//     // console.log(item.price);
//     if (item.name === productName) {
//       console.log(item.price);
//       return item.price;
//     }
//   }
//   console.log(null);
//   return null;
//   // Change code above this line
// }
// getProductPrice();

// Напиши функцію getAllPropValues(propName), яка приймає один
// параметр propName - ім'я (ключ) властивості. Функція повинна
// повернути масив всіх значень властивості з таким ім'ям з кожного
// об'єкта в масиві products. Якщо в об'єктах відсутні властивості з
// таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
//   let arr = [];
//   for (const item of products) {
//     if (Object.keys(item).includes(propName)) {
//       arr.push(item[propName]);
//     }
//   }
//   console.log(arr);
//   return arr;
//   // Change code above this line
// }
// getAllPropValues("quantity");
//
//
//
//
//
// Напиши функцію calculateTotalPrice(productName), яка приймає
// один параметр productName - назва товару. Функція повинна
// повернути загальну вартість (ціна * кількість) товару з таким
// ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// //
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;

//   // Change code above this line
// }
// console.log(calculateTotalPrice("Scanner"));

// ------------------------------------------Деструктуризація

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // console.log(meanTemperature);
// console.log(yesterday);

//
//
//
//
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// console.log(highTemperatures.yesterday);
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(forecast);
// console.log(forecast.today);
// console.log(forecast.tomorrow);

//
//
//
//
//
//
//

// Функція calculateMeanTemperature(forecast) приймає
// один параметр forecast - об'єкт температур на два дні
// наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і
// tomorrowHigh однією операцією деструктуризації властивостей об'єкта
// forecast

// function calculateMeanTemperature(forecast) {
//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //   const tomorrowHigh = forecast.tomorrow.high;

//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   console.log(forecast);
//   console.log(todayLow);
//   console.log(todayHigh);

//   // Change code above this line

//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });

// У змінній scores зберігається масив результатів тестування.
// Використовуючи розподіл і методи Math.max() і Math.min(), доповни
// код таким чином, щоб у змінній bestScore був найвищий бал, а у
// worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

//

//

//
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores
// зберігаються результати тестування окремих груп. Використовуючи
// розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої
// до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

//

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//

//

//

//

// В конструкторі можна створювати нові тести, для яких є налаштування
// за замовчуванням, які зберігаються у змінній defaultSettings. Під
// час створення тесту, усі або частину налаштувань можна перевизначити,
// вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти
// налаштування за замовчуванням і поверх них застосувати перевизначені
// налаштування. Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(defaultSettings);
// console.log(overrideSettings);
// console.log(finalSettings);

//

//

//

//

// Напиши функцію makeTask(data) яка приймає один параметр
// data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання,
// не змінюючи напряму параметр data. У новому об'єкті повинна
// бути властивість completed, значення якої зберігається в однойменній
// локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші
// дві, category і priority, можуть бути відсутніми. Тоді, в новому
// об'єкті завдання, у властивостях category і priority повинні бути
// значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)
// Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }
// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Виклик makeTask({ category: "Finance", text: "Take interest" })
// повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Виклик makeTask({ priority: "Low", text: "Choose shampoo" })
// повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Виклик makeTask({ text: "Buy bread" })
// повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   data = { category: "Homemade", priority: "Low", text: "Take out the trash" };
//   defaultData = { completed, category, priority };
//   // Change code above this line
//   return { ...defaultData, ...data };
// }
// console.log(makeTask());

//

//

//

//
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб
// вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується
// синтаксис ... (оператор rest)
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78
// Виклик add(74, 11, 62, 46, 12, 36) повертає 241

//
// Change code below this line

// function add(...args) {
//   let summ = 0;
//   for (let arg of args) {
//     summ += arg;
//   }
//   return summ;
//   // Change code above this line
// }
// console.log(add(74, 11, 62, 46, 12, 36));

//
//

//
//

//
//
// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином, щоб вона
// рахувала суму тільки тих аргументів, які більші за задане число.
// Це число повинно бути першим параметром функції.

// Оголошена функція addOverNum()
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args[0]) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); // має бути - 0
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // має бути - 218

//

//

//

//

// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches,
// в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути
// масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []

// // Change code below this line
// function findMatches(array, ...args) {
//   // const a = addItems;
//   // console.log(array);
//   // console.log(args);
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     // console.log(arg);
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]

//

//

//

//

//

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки
// за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting
// book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає
// рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і
// <нова назва> - це значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.getBooks - це метод об'єкта
// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"
// Значення властивості bookShelf.addBook - це метод об'єкта
// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"
// Значення властивості bookShelf.removeBook - це метод об'єкта
// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"
// Значення властивості bookShelf.updateBook - це метод об'єкта
// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок
// "Updating book Sands of dune to Dune"

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook() {
//     return "Deleting book Red sunset";
//   },
//   updateBook() {
//     return "Updating book Sands of dune to Dune";
//   },
//   // Change code above this line
// };

//

//

//

//

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював
// назву книги з oldName на newName у властивості books. Використовуй indexOf()
// для того, щоб знайти потрібний елемент масиву, і splice() для того,
// щоб замінити цей елемент.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення
// властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення
// властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     oldName = "Haze";
//     newName = "qwewqeqwe";
//     for (book of this.books) {
//       if (oldName === book) {
//         this.books.splice(this.books.indexOf(oldName), 1, newName);
//       }
//     }
//     return bookShelf.books;

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook());

// console.log(bookShelf.books.indexOf(oldName));
// console.log(bookShelf.books.splice(1, 1, "qwewqeqwe"));

//
//
//

//

//

//

// Доповни метод removePotion(potionName) таким чином,
// щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions -
//   це масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion -
//   це метод об'єкта
// Після першого виклику методу
// atTheOldToad.removePotion("Dragon breath"),
//   у властивості potions буде масив["Speed potion", Stone skin"]
// Після другого виклику методу
// atTheOldToad.removePotion("Speed potion"),
//   у властивості potions буде масив["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (item of this.potions) {
//       if (potionName === item) {
//         this.potions.splice(this.potions.indexOf(potionName), 1);
//       }
//     }
//     console.log(potionName);
//     // console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

//
//

//

//

//

// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві
// зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це
// масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// у властивості potions буде масив["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// у властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    for (item of this.potions) {
      if (item === oldName) {
        this.potions.splice(this.potions.indexOf(oldName), 1, newName);
      }
    }
    // Change code above this line
    // console.log(this.potions);
    return this.potions;
  },
};
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
