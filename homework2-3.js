/*ДЗ2, Задание 3*/

let a, b;

function getRandom(min, max){
    return parseInt(Math.random()*(max-min) + min);
}

a = getRandom(-100, 100);
b = getRandom(-100, 100);
console.log(a, b);

if(a>=0 && b>=0){
    console.log(a-b);
}
if(a<0 && b<0){
    console.log(a*b);
}
//первое решение, которое пришло в голову, но про получение знака я погуглила, спасибо)

if (a*b<0){
    console.log(a+b);
}