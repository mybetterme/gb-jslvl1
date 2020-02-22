/*ДЗ2, Задание 4*/

let a=10,
    b=5,
    result;

function addition(operand1, operand2){
    return result = operand1 + operand2;
}
function subtraction(operand1, operand2){
    return result = operand1 - operand2;
}
function multiplication(operand1, operand2){
    return result = operand1 * operand2;
}
function division(operand1, operand2){
    return result = operand1 / operand2;
}
/*Задание 5*/
/**
 * Выбирает по номеру одну из математических функций, реализованных в прошлом задании.
 * @param {number} arg1 - первый операнд
 * @param {number} arg2 - второй операнд
 * @param {number} operation - номер операции от 1 до 4
 * */
function mathOperation(arg1,arg2,operation) {
    switch (operation) {
        case 1:
            console.log(addition(arg1,arg2));
            break;
        case 2:
            console.log(subtraction(arg1,arg2));
            break;
        case 3:
            console.log(multiplication(arg1,arg2));
            break;
        case 4:
            console.log(division(arg1,arg2));
            break;
        default:
            console.log("Некорректное значение аргумента operation. Используйте число от 1 до 4");
    }
}
console.log(a,b);
mathOperation(a, b, 3);