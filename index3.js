/* Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */
let str = 'hello';
let result = str.split("").reverse().join("");
console.log(result);