'use strict'

let centi = 500;

centi += 100;
centi *= 10;
centi -=1;

console.log(centi);



const price= 1200;

console.log(price > 1000);
console.log(500 < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price === 1000);
console.log(price !== 1000);

console.log(Boolean(0));
console.log(Boolean('hello'));

const score = 90;

if (score >= 80){
    console.log('Great!');
    }else if (score >= 60){
        console.log('Good.')
    }else{
        console.log('ok...');
    }

score >= 80 ? console.log('great!') : console.log('OK~');