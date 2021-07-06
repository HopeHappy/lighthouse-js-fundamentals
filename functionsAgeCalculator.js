const ageCalculator = (name, yearOfBirth, currentYear) => {
    let age = currentYear - yearOfBirth;
    return `${name} is ${age} years old.`
}

console.log(ageCalculator('Hannah', 1986, 2021));
console.log(ageCalculator('Max', 1987, 2021));