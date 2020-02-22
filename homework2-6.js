/*ДЗ2, Задание 6*/

function caseVerification(num){
    let resultString = "";
    num = String(num);
    let lastSymbol = num[num.length-1];
    switch (+lastSymbol) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            resultString = "рублей";
            break;
        case 1:
            resultString = "рубль";
            break;
        case 2:
        case 3:
        case 4:
            resultString = "рубля";
    }
    return resultString;
}
let sum = parseInt(prompt("Введите число денег в рублях, которое хотите положить на счёт"));
if (!isNaN(sum)){
    let rightWord = caseVerification(sum);
    alert(`Ваша сумма в ${sum} ${rightWord} успешно зачислена.`);
} else {
    alert("Вы должны были ввести число");
}





