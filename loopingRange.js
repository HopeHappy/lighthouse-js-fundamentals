const range = (start, end, step) => {
    let count = Math.floor((end - start) / step) + 1;
    let list = [];
    let num = start;

    if (start === undefined || end === undefined || step === undefined) {
        return list;
    } else if (start > end) {
        return list;
    } else if (step <= 0) {
        return list;
    } else {
        list.push(num);
        let i = 1;
        while(i < count) {
            num += step;
            list.push(num);
            i++;
        }
    }
    return list;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));