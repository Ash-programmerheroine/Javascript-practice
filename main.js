const s ="Hello world";
const S ="Hello, world, it, code";
console.log(s.toLowerCase());
console.log(s.toUpperCase().substring(1, 7));
console.log(s.substring(1, 7));
console.log(S.split(','))
//Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);
const fruits =['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mango');// TO add in Last
fruits.unshift('strawberry');// TO add in First
console.log(Array.isArray('3'));

fruits.pop('');

console.log(fruits);
console.log(fruits.indexOf('oranges'));