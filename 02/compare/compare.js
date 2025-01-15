// == Порівняня данних

console.log(`compereResult 2 and 3 ${2 == 3}`);
console.log(`compereResult 2 and 2 ${2 == 2}`);
console.log(`compereResult '2' and 3 ${2 == '2'}`);
console.log(`compereResult '2' and '3' ${'2' == '3'}`);
console.log(`compereResult 'Tom' and 'Max' ${'Max' == 'Tom'}`);
console.log(`compereResult True and 1 ${true == 1}`);
console.log(`compereResult True and False ${true == false}`);

// ===

console.log('===');

console.log(`compereResult 2 and 3 ${2 === 3}`);
console.log(`compereResult 2 and 2 ${2 === 2}`);
console.log(`compereResult '2' and 3 ${2 === '2'}`);
console.log(`compereResult '2' and '3' ${'2' === '3'}`);
console.log(`compereResult 'Tom' and 'Max' ${'Max' === 'Tom'}`);
console.log(`compereResult True and 1 ${true === 1}`);
console.log(`compereResult True and False ${true === false}`);

// != -> ==

console.log('!=');

console.log(`Not equal 2 and 3 ${2 != 3}`);
console.log(`Not equal 2 and 2 ${2 != 2}`);
console.log(`Not equal '2' and 3 ${2 != '2'}`);
console.log(`Not equal '2' and '3' ${'2' != '3'}`);
console.log(`Not equal 'Tom' and 'Max' ${'Max' != 'Tom'}`);
console.log(`Not equal True and 1 ${true != 1}`);
console.log(`Not equal True and False ${true != false}`);

// не дуже важливо сурове порівняня данних 
console.log('!==');

console.log(`Not equal 2 and 3 ${2 !== 3}`);
console.log(`Not equal 2 and 2 ${2 !== 2}`);
console.log(`Not equal '2' and 3 ${2 !== '2'}`);
console.log(`Not equal '2' and '3' ${'2' !== '3'}`);
console.log(`Not equal 'Tom' and 'Max' ${'Max' !== 'Tom'}`);
console.log(`Not equal True and 1 ${true !== 1}`);
console.log(`Not equal True and False ${true !== false}`);

console.log('>,< >=, <=');

console.log(`2>3 ${2>3}`);
console.log(`20>3 ${20>3}`);
console.log(`2>=2 ${2>=2}`);

console.log(`2<3 ${2<3}`);
console.log(`20<3 ${20<3}`);
console.log(`2<=2 ${2<=2}`);
console.log(`2<3<4 ${2<3<4}`);

// && Логічне І буква і


// True && False = False
// False && False = False
// False && True = Flase
// True && True = True

console.log(`Logic && ${2<3 && 'max' === 'max' && 4>3 }`);
console.log(`Logic && ${2<3 && 'Max' === 'max' && 4>30 }`); 

// || або чи
// true || false = true
// false || true = true
// true || true = true
// false || false = false

console.log(`Logic || ${2<3 || 'max' === 'max' || 4>3 }`);
console.log(`Logic || ${2<3 || 'max' === 'max' || 4>30 }`);
