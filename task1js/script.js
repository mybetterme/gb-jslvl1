'use strict';
const objNum = {};

let userNumber = {
    numCheck(value){
        if (isNaN(value)){
            console.log(`Вы ввели не число`);
            return objNum;
        }
        if (value<0 || value>999){
            console.log(`Ваше число вне допустимого диапазона`);
            return objNum;
        }
        if (!Number.isInteger(value)){
            console.log(`Ваше число не целое`);
            return objNum;
        }
        return value;
    },

    numDecompose(num){

    }

};

userNumber.numDecompose(userNumber.numCheck(+prompt('Введите число в диапазоне от 0 до 999')));


/*class NumToObject{

    constructor(units, tens, hundereds) {
        this.units = units;
        this.tens = tens;
        this.hundereds = hundereds;
    }
    set numCheck(num){
        if (num<0 || num>999){
            console.log(`Ваше число вне допустимого диапазона`);
            return objNum;
        }
        if (!Number.isInteger(num)){
            console.log(`Ваше число не целое`);
            return objNum;
        }
        if (isNaN(num)){
            console.log(`Вы ввели не число`);
            return objNum;
        }
        this.objNum = num;
    }



}



const userNumber = new NumToObject;
userNumber.numCheck = parseInt(prompt('Введите число в диапазоне от 0 до 999'));*/
