/* Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения. */
input = prompt('Введите целое положительное число');
if (isNaN(input++)) {
  alert('Введенное значение ' + input + ' не является числовым ');
} else if (typeof (--input) == "number") {
  if ((input % 2) == 0) {
    console.log('Введенное значение ' + input + ' четное');
  } else if ((input % 2) != 0) {
    console.log('Введенное значение ' + input + ' нечетное');
  }
}