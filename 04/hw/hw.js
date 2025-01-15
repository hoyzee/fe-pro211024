let start = 1;
let end = 20;
let summ = 0;
let i = start;

while(i<=end){
    if(i%2===0){
        // summ = summ + i;
        summ += i;
        
    }
    i++;
}
console.log(`Сума всіх парних чисел від ${start} до ${end} = ${summ}`)

// КАлькуль !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Ж№

let number = 4;
for(let i=0; i<=10; i++){
    console.log(`${number} * ${i} = ${number*i}`);
}

let Usernumber = 10;
for(let i = 1; i <= Usernumber; i++){
    if(i%2 === 0){
        console.log(`${i} Парне число `);
    }
    else{
        console.log(`${i} не Парне число `);
    }
}


function subtrac(a, b){
    return a-b;
}

let multiplay = (a,b)=>a*b;

function divide(a, b){
    if(b !== 0 ){
        return a/b;
    }
    else{
        return 'Ділити на нуль не можна ';
    }
}

let numberA = Number(prompt('Type number A'));
let numberB = Number(prompt('Type number B'));
let operator = prompt('Type operator +,/,*,-')

switch(operator){
    case'+':
        console.log(`${numberA} + ${numberB} = ${add(numberA, numberB)}`);
        break;
        case'-':
        console.log(`${numberA} - ${numberB} = ${subtrac(numberA, numberB)}`);
        break;
        case'*':
        console.log(`${numberA} * ${numberB} = ${multiplay(numberA, numberB)}`);
        break;
        case'/':
        console.log(`${numberA} / ${numberB} = ${divide(numberA, numberB)}`);
        break;
        default: 
        console.log('Невідома операція');
        break;

}