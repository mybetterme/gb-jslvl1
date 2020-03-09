let questionMethods = {
    answersParse(questionId){
        let answers = [];
        let answersOrder = questionMethods.answersRandom();
        for (let i = 0; i<4; i++){
            answers.push(questions[questionId].answers[answersOrder[i]]);
        }
        return answers;
    },
    /**
     * метод для замешивания ответов в случайном порядке,
     * выдаёт с примерно равной вероятностью, как положительный, так и отрицательный результат,
     * что позволяет замешать ответы более-менее равномерно
     *
     * возвращает порядок вывода ответов
     * @returns {[]}
     */
    answersRandom(){
        let answersOrder = dictionary.slice();
        answersOrder.sort(function(a, b) {
            return Math.random() - 0.5;
        });

        return answersOrder;
    },
    /**
     * Метод для проверки правильности ответа. Сравниваю текст выбранного ответа и текст правильного.
     * Не уверена, что это нормальный вариант, мне кажется, тут как-то слишком много действий,
     * но после замешивания ответов только сравнение строк и осталось, тем более, что юзер самих строк никак не касается,
     * и испортить или перепутать там ничего не может
     *
     * Или всё-таки правильнее было бы после замешивания ответов сразу получить новый индекс правильного ответа и сравнивать с ним символ,
     * который вводит пользователь?
     *
     * @param answer - текст ответа, который выбрал юзер
     * @param questionId - номер текущего вопроса
     * @returns {boolean}
     */
    checkAnswer(answer, questionId) {
        let rightAnswer = questions[questionId].rightAnswer;
        return answer === questions[questionId].answers[rightAnswer];
    }
};

/** Объект с методами для проверки действий пользователя
 *
 * @type {{getAnswer: (function())}}
 */

let userActions = {
    getAnswer() {
        while (true){
            let userAnswer = prompt(`Введите номер варианта ответа`);
            if (userAnswer === "") {
                alert(`Введите один из вариантов ответа a, b, c или d`);
                continue;
            }
            if (userAnswer == null){
                break;
            }
            if (!dictionary.includes(userAnswer)) {
                alert(`Введите один из вариантов ответа a, b, c или d`);
                continue;
            }
            /*так как после замешивания нам особо сам символ не нужен, а нужен
            * индекс ответа в перемешанном массиве с ответами, сразу его и возвращаю*/
            return dictionary.indexOf(userAnswer);
        }
    }
};


