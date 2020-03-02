'use strict';

/**
 * Класс, создающий объект по заданным параметрам просто так для тренировки)
 */
class parsedObject{
    constructor(units, tens, hundreds){
        this.units = units;
        this.tens = tens;
        this.hundereds = hundreds;
    }
}

/**
 * проверка значения, введённого пользователем
 * @param number - число, которое ввёл пользователь
 * @returns {boolean}
 */
function numberCheck(number) {
    if(number < 0 || number > 999){
        console.log("Число должно быть в диапазоне от 0 до 999!");
        return false;
    }
    if(isNaN(number)){
        console.log("Вы должны ввести число!");
        return false;
    }
    if (!Number.isInteger(number)){
        console.log("Число должно быть целым!");
        return false;
    }
    return true;
}

/**
 * Основная функция, которая парсит число и отправляет полученные данные в конструктор для нового объекта
 * @returns {{}|parsedObject}
 */
function numberToObject() {
    let userNumber = +prompt("Введите целое число в диапазоне от 0 до 999");
    if (numberCheck(userNumber)){
        let hundreds = Math.floor(userNumber/100);
        let tens = Math.floor((userNumber - hundreds*100)/10);
        let units = Math.floor(userNumber - hundreds*100 - tens*10);
        console.log(units);
        return new parsedObject(units, tens, hundreds);
    }
    else{
        return {};
    }
}


const parsingResult = numberToObject();
console.log(parsingResult);