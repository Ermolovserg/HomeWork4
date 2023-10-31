let result = prompt("Введите значение:");

let input = +result;

if (!isNaN(input) && typeof input === 'number') {
  if (input % 2 === 0) {
    console.log("Число чётное");
  } else {
    console.log("Число нечётное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}