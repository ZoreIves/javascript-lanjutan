let arry = [1, 2, 3, 4]
let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arry.reduce(reducer));

console.log(arry.reduce(reducer, 5));