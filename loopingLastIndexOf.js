const lastIndexOf = (array, number) => {
    let position;
    if (array.indexOf(number) === -1) {
        position = -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
                position = i;
            }
        }
    }
    return position;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([], 3));
console.log(lastIndexOf([0, 1, 4, 1, 2], 5));