let thisYear = 2024;

// thisYear === 2024 = false
if(thisYear === 2024){
    alert('Hello 2024');
}
// thisYear === 2025 = true
if(thisYear === 2025){
    alert('Hello 2025');
}
// if(true){
//     alert('True result')
// }

let result = 20<4;
if(result){
    alert('True result');
}else{
    alert(`Result > 4`);
}
let UserNumber = 60;

if(UserNumber < 4){
    console.log(`UserNumber ${UserNumber} <4`);
}
else if(UserNumber > 5 && UserNumber < 10){
    console.log(`UserNumber 5< ${UserNumber} <10`);
}
else if(UserNumber > 11 && UserNumber < 50){
    console.log(`UserNumber 11< ${UserNumber} <50`);
}
else{
    console.log(`UserNumber ${UserNumber} any info about this`);
}

let isUserAdmin = true;

// if(isUserAdmin){
//     console.log(`User is Admin`)
// }
// else{
//     console.log(`User is not Admin`)
// }



// ! змінює значення на протилежне типу було false стало true
if(!isUserAdmin){
    console.log(`User is not Admin! Hello user`);
}
let userHelloMessage = '';
let userloginIntoSystem = false;

// if(userloginIntoSystem){
//     userHelloMessage = 'Hello user';
// }
// else{
//     userHelloMessage = 'Goodbye user';
// }

// userHelloMessage = userloginIntoSystem ? 'Hello user' : 'Goodbye user'; скорочений варік того що зверху

userHelloMessage = userloginIntoSystem ? 'Hello user' : 'Goodbye user';
console.log(`user text message ${userHelloMessage}`);

let score = 85;
let grade = '';

// if(score>=90){
//     grade = 'A';
// }
// else if(score>=80){
//     grade = 'B';
// }
// else if(score>=70){
//     grade = 'C';
// }
// else{
//     grade = 'D-';
// }
grade = (score>=90)? 'A':
        (score>=80)? 'B':
        (score>=70)? 'C': 'D-';


console.log(`User score ${score} user grade ${grade}`)
