// let a = 2;
// let b = 3;
// console.log('===');
// console.log(`Result a+b ${a + b}`);
// console.log('===');

// a=4;
// b=5;
// console.log('===');
// console.log(`Result a+b ${a + b}`);
// console.log('===');

function summResult(firstValue, SecondValue) {
    console.log('===');
    console.log(`Result ${firstValue} + ${SecondValue} = ${firstValue + SecondValue}`);
    console.log('===');
}

// summResult Виклик Функції
summResult(2, 3);
summResult(4, 3);
summResult(40, 30);
summResult(140, -30);

function sayHi(name) {
    if (name === undefined) {
        console.log(`Hi stranger!`)
    }
    else {
        console.log(`Hi user ${name}`)
    }
}

/// function declaration
sayHi('Tom');
sayHi();
sayHi('MAx');

///function Expression
let sayHello = function (userName) {
    if (userName === undefined) {
        console.log(`Hi stranger!`);



        sayHello('Toma');
    }
    else {
        console.log(`Hi user ${userName}`);
    }
}

sayHello('Toma');
sayHello();


function confirmCallBack() {
    alert('Ми приймаємо ваше заовлення ');
}
function cancelCallBack() {
    alert('Ми не приймаємо ваше заовлення ');
}
// function showInfo(age, confirmCallBack, cancelCallBack){
//     if(age>18){
//         confirmCallBack();
//     }
//     else{
//         cancelCallBack();
//     }
// }

// showInfo(19, confirmCallBack, cancelCallBack);
// showInfo(17, confirmCallBack, cancelCallBack);

function showInfo(age, confirmFn, cancelFn) {
    if (age > 18) {
        confirmFn();
    }
    else {
        cancelFn();
    }
}

function documnetCancelMessage() {
    document.write(`<h1>Ми не приймаємо ваше заовлення</h1>`);
    document.write(`<a href=''>Перегляньте інші товари</a>`);
}
function documnetConfirmMessage() {
    document.write(`<h1>Ми приймаємо ваше заовлення</h1>`);

}

showInfo(17, documnetConfirmMessage, documnetCancelMessage);
function multiplyValue(a, b) {
    let Result = a * b;
    return Result;
}
console.log(`Result multiply 2*2 = ${multiplyValue(2, 2)}`);


function summValueFull(a, b) {
    return a + b;
}
let summValueArrow = (a, b) => a + b;
console.log(`Summ 2+3 = ${summValueFull(2, 3)}`);
console.log(`Summ 2+3 = ${summValueArrow(2, 3)}`);

let checkNumber = function (FirstNumber, SecondNumber) {
    if (FirstNumber > SecondNumber) {
        ;
        return `Biger number first ${FirstNumber}`;
    }
    else {
        return `Biger number second ${SecondNumber}`;
    }
}
console.log(`Check Biger Number between 2,5 ${checkNumber(2,5)}`);

let shortCheckNumber = (FirstNumber, SecondNumber)=>{
    // if (FirstNumber > SecondNumber) {
    //     ;
    //     return `Biger number first ${FirstNumber}`;
    // }
    // else {
    //     return `Biger number second ${SecondNumber}`;
    // }
    return FirstNumber > SecondNumber ? `Biger number first ${FirstNumber}` : `Biger number second ${SecondNumber}`;
}
console.log(`Check Biger Number between 2,5 ${shortCheckNumber(20,5)}`);

function wellcome(userName = 'Stranger User'){
    console.log(`wellcome ${userName}`);
    console.log(arguments);
}
wellcome('John');
wellcome();
wellcome('John2', 'kail', 'Den');

let Result = 0;

function mathOperation(a,b){
    result = a+b;
    console.log(result);
}
mathOperation(12,23);