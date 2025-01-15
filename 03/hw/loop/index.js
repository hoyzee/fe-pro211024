// console.log(1);
// console.log(2);
// console.log(3);
// console.log('...');
// console.log(30);

let counter = 1;
do{
    console.log(`Count Number ${counter}`);
    counter ++;
}while(counter < 10);

let whileCounter = 0;
while (whileCounter<5) {
    console.log(`While count ${whileCounter}`);
    whileCounter++; //++ ЗБІЛЬШЕННЯ НА 1
}
// iterator
for(let i = 20; i >10; i--){
    if(i %2 === 0){
        continue;
    }
    console.log(`For loop value ${i}`);
    // if(i === 12){
    //     break;
    // }
}

//for(let i = 15; i >10; i--){
    // console.log(`For loop value ${i}`);
// } Навпаки
