'use strict'

console.log('Hello World from main.js');

let centi = 500;

centi += 100;
centi *= 10;
centi -= 1;

console.log(centi);



const price = 1200;

console.log(price > 1000);
console.log(500 < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price === 1000);
console.log(price !== 1000);

console.log(Boolean(0));
console.log(Boolean('hello'));

const gram = 90;

if (gram >= 80) {
    console.log('Great!');
} else if (gram >= 60) {
    console.log('Good.')
} else {
    console.log('ok...');
}

gram >= 80 ? console.log('great!') : console.log('OK~');


const score = 60;
const name = 'taguchi';

if (score >= 50) {
    if (name === 'taguchi') {
        console.log('Good job!');
    }
}

const signal = 'pink';

switch (signal) {
    case 'red':
        console.log('stop!');
        break;
    case 'yellow':
        console.log('Caution!!');
        break;
    case 'blue':
    case 'green':
        console.log('Go!');
        break;
        default:
            console.log('wrongsignal');
}

for (let i = 1;i <= 10; i ++){
    console.log('hello');
    console.log('hello' +i);
    console.log(`hello ${i}`);
}