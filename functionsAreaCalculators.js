const calculateRectangleArea = (length, width) => {
    const areaOfRectangle = length * width;
    if (length >= 0 && width >= 0) {
        return areaOfRectangle;
    }
}

const calculateTriangleArea = (base, height) => {
    const areaOfTriangle = (base * height) / 2;
    if (base >= 0 && height >= 0) {
        return areaOfTriangle;
    }
}

const calculateCircleArea = radius => {
    const areaOfCircle = Math.PI * radius * radius;
    if (radius >= 0) {
        return areaOfCircle;
    }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));