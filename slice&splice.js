const numbers = [76, 48, 92, 45, 10, 32, 87];
const sliced = numbers.slice(1, 5);
console.log(sliced);
console.log(numbers);

const spliced = numbers.splice(1, 4, 15, 8, 99);
console.log(spliced);
console.log(numbers);