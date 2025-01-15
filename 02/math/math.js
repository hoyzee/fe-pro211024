// - віднімання
// + додавання
// * множення
// \ ділення
// % залишок від ділення
// ** піднесення до стерені
let FirstValue = '3';
let SecondValue = '2';
let SecondValueNumber = 4;
let summResult = FirstValue + SecondValue; 
console.log(`+ operation ${summResult}`);
console.log(`+ operation result ${FirstValue} + ${SecondValue} = ${FirstValue + SecondValue}`);

console.log(`- operation result ${FirstValue} - ${SecondValue} = ${FirstValue - SecondValue}`); 

console.log(`+ operation result ${FirstValue} + ${SecondValueNumber} = ${FirstValue + SecondValueNumber}`);

console.log(`* operation result ${FirstValue} * ${SecondValueNumber} = ${FirstValue * SecondValueNumber}`);

console.log(`* operation result ${FirstValue} * ${SecondValue} = ${FirstValue * SecondValue}`);


let age = 25;
age = age + 5;
console.log(age);
// скорочений запис виразу age = age + 5;
age += 5;
console.log(age);