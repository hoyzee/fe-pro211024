// let userNumber = Number(prompt('Напишіть число'));
// let checkNumberResult =`Це число є парне: ${userNumber %2 === 0}`;
// console.log(checkNumberResult);

// let userAge = Number(prompt('Ваш вік?'));
// console.log(`Користувачу більше 18 ${userAge>=18}`);


// let firstNumber = Number(prompt('First Number'));
// let secondNumber = Number(prompt('Second Number'));
// let ThirdNumber = Number(prompt('Third Number'));
// if(firstNumber >= secondNumber && firstNumber >= ThirdNumber){
//     console.log(`Перше число найбільше`);
// }
// else if(secondNumber > firstNumber && secondNumber>ThirdNumber){
//     console.log(`Друге число найбільше`);
// }
// else{
//     console.log(`Третє число найбільше`);
// }

let mothNumber = Number(prompt('Напишіть номер від 1 до 12'));
if(mothNumber >= 1 && mothNumber <= 12){
    if(mothNumber >= 3 && mothNumber <= 5){
        console.log('Весна');
    }
    else if(mothNumber >= 6 && mothNumber <= 8){
        console.log('Літо');
    }
    else if(mothNumber >= 9 && mothNumber <= 11){
        console.log('Осінь');
    }
    else{
        console.log('Зима');
    }
}
else{
    console.log('Спробуйте інше число від 1 до 12');
}