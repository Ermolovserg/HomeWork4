let arr = [1, 3, 4, 5, 5, 6, 7, 8, 9, 10, 2, 3, 1]

let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            arr2.push(arr[i])
        }
    }

    console.log(arr2)