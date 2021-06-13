/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */
let arr = [1, 1, 1];
let isElementsEqual = true;
let firstElement = arr[0];
for (let element of arr) {
	if (element !== firstElement) {
		console.log('В массиве arr не все элементы одинаковые');
        isElementsEqual = false;
		break;
	}
}
if (isElementsEqual) {
  console.log('В массиве arr все элементы одинаковые');
}