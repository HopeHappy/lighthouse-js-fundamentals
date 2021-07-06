const howManyHundreds = number => {
    let numOfContainer = Math.floor(number / 100);
    return numOfContainer;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));