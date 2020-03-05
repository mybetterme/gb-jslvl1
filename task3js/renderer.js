let generateQuestion = {
    questionParse(questionId){
        let answers = answersRandom(questionId);
        console.log(`${questionId + 1} вопрос: ${questions[questionId].text}`);
        for (let i = 0; i<4; i++){
            console.log(`\t${++i}. ${answers[--i]}`);
        }
    },
    /**
     * функция сравнения для функции сортировки
     * выдаёт с примерно равной вероятностью, как положительный, так и отрицательный результат,
     * что позволяет замешать ответы более-менее равномерно
     * @returns {number}
     */
    compareRandom(a, b) {
        return Math.random() - 0.5;
    },
    /**
     * функция для замешивания ответов в случайном порядке
     * @returns {[]}
     */
    answersRandom(questionId){
        let answersOrder = [0, 1, 2, 3];
        let answers = [];
        answersOrder.sort(compareRandom);

        for (let i = 0; i<4; i++){
            answers.push(questions[questionId].answers[answersOrder[i]]);
        }
        return answers;
    }
};


let checkAnswer = {
    getAnswer() {
        const avaibleNumbers = [1, 2, 3, 4];
        userAnswer = +prompt(`Введите номер варианта ответа`);
        while (true){
            if(isNaN(userAnswer)){
                return null;
            }
            if (!avaibleNumbers.includes(userAnswer)) {
                alert(`Введите число в диапазоне от 1 до 4`);
                continue;
            }
            return userAnswer;
        }
    },
    check(answerNum, questionId) {
        if (answers[userAnswer] === questions[questionId].answers[questions[questionId].rightAnswer]){
            console.log("Правильный ответ! Переходим к следующему вопросу.");
            return true;
        }
        else {
            console.log("Неправильный ответ! Вы проиграли");
        }
    }
};




/*
let renderer = {
    // Сюда запишем все что надо отобразить.
    map: "",


    render() {
        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < config.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < config.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            this.map += '\n';
        }
        
        // Выводим все что надо отобразить в игре.
        console.log(this.map);
    },

    clear() {
        // Чистим консоль.
        console.clear();
        // Чистим карту.
        this.map = "";
    }
};

*/
