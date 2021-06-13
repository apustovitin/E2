/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */
let arr = [1, 2, 1, 2, 1, 0, "1", 0, 1];
let oddElementsNumber = 0;
let notOddElementsNumber = 0;
let zeroElementsNumber = 0;
for (let element of arr) {
	if (typeof element == "number") {
		if (element == 0) {
			++zeroElementsNumber;
			continue;
		} else if ((element % 2) != 0) {
			++notOddElementsNumber;
		} else if ((element % 2) == 0) {
			++oddElementsNumber;
		}
	}
}
console.log('Количество нулей в массиве arr: ' + zeroElementsNumber);
console.log('Количество четных чисел в массиве arr: ' + oddElementsNumber);
console.log('Количество не четных чисел в массиве arr: ' + notOddElementsNumber);