function addNumbers(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter valid numbers';
    }
    return num1 + num2;
}
const result = addNumbers(10, 20);
console.log(result);