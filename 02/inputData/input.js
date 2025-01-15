let FirstNumber = 10;
// let promptResult = prompt('Напишіть щось нам');
let promptResult = Number(prompt('Ваш вік', '1'));

console.log(promptResult);

//  confirmValue Дає відповідь True or False від відповіді користувача 

// let confirmValue = confirm('How are you?');
// console.log(confirmValue);

console.log(promptResult);
// promptResult += 10; Приклад як збільшити число  += 10; 
// promptResult += 10;
// promptResult = 10+ + promptResult;
// let transoFormData = parseInt(promptResult); Окргляє до числа яке було 34.4 = 34 Таке вийде
// let transoFormData = parseFloat(promptResult); Залишає крапку 34.3 наприклад 
// let transoFormData = Number(promptResult); Найкращий обєднує все в собі Наприклад 34.3 так і буду чи 34 так і буде
let transoFormData = Number(promptResult);

// console.log(`After transform ${transoFormData}`);


