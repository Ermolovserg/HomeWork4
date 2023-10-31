let arr = [1, 4, true, 0, false, NaN, null, 6, 7, "a", 8, 1]

let arrNull = 0;
let arrEven = 0;
let arrOdd = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] === 0) {
      arrNull++;
    } else if (arr[i] % 2 === 0) {
      arrEven++;
    } else {
      arrOdd++;
    }
  }
}


console.log ("
console.log (
console.log (