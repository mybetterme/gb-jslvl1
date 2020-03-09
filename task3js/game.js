let game = {
    run: function () {
        //прогоняю массив с вопросами
        for (let i = 0; i < questions.length; i++) {
            /*разбираю объект вопроса и вывожу вопрос и перемешанные ответы
            чтобы вывести индексы вопросов использую словарик, он же используется для проверки правильности ответа
            а можно было бы, например, вывести через юникодные символы и метод String.fromCharCode, но если понадобится
            поменять правила игры и, например, сделать вывод вариантов ответов с цифрами, то тут тоже придётся менять,
            а так достаточно поменять словарик)*/


            let answers = questionMethods.answersParse(i);
            console.log(`${i + 1} вопрос: ${questions[i].text}`);
            for (let j = 0; j < 4; j++) {
                console.log(`\t${dictionary[j]}. ${answers[j]}`);
            }
            const userAnswer = userActions.getAnswer();
            /*А можно как-то обойтись без двойной проверки здесь и в методе getAnswer?
            * Если я не проверяю там, то программа игнорирует попытку пользователя выйти из игры,
            * а если не проверяю здесь, то перед тем как выйти, игра всё ещё чекает правильность ответа и
            * заодно говорит пользователю, что его ответ неправильный*/
            if (userAnswer == null){
                console.log('До свидания, приходите ещё');
                break;
            }
            if (questionMethods.checkAnswer(answers[userAnswer], i)){
                player.scores += questions[i].scores;
                console.log(`Правильный ответ! Вы заработали ${questions[i].scores} очков.\nВаш счёт: ${player.scores} очков.`);
                if (i < (questions.length - 1)){
                    console.log(`Переходим к следующему вопросу`);
                }
                else{
                    console.log("Поздравляем. Вы выиграли!");
                }
            }
            else {
                console.log("Неправильный ответ! Вы проиграли");
                break;
            }

        }
        if (confirm("Хотите сыграть ещё?")){
            console.clear();
            player.scores = 0;
            game.run();
        }
        else{
            console.log("До свидания, приходите ещё")
        }

    },

    init(){
        console.log("Я хочу сыграть с вами в одну игру!\n");
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();

