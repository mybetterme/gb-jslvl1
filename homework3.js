'use strict';

/*Задание 2*/
function numParity(num) {
    switch (num % 2){
        case 0:
            return `${num} - чётное число`;
        case 1:
            return `${num} - нечётное число`;
    }
}

for (let i = 0; i<=10; i++){
    (i === 0) ? console.log(`${i} - это ноль`) : console.log(numParity(i));
}

/*Задание 3*/
