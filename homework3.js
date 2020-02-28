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

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0]["rating"]["dislikes"]);
console.log(post.comments[1].userId);
console.log(post.comments[1]["text"]);

/*Задание 4*/

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    console.log(product.price*.85);
});

//или со стрелочной функцией

products.forEach(product => console.log(product.price*.85));

/*Задание 5*/

const shopproducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let result = shopproducts.filter(function (product) {
    if("photos" in product){
        return product.photos.length > 0;
    }
});
console.log(result);

/*Не понимаю, почему этот вариант работает, а закомментированный - нет? */

shopproducts.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});


/**
 * Функция сравнения пар чисел для правильной сортировки.
 * Если фунцкия возвращает отрицательное число, то а присваивается меньший индекс, чем b,
 * если положительное, то b получает меньший индекс, чем а,
 * если 0, значит, числа равны и эта пара сортируется относительно других элементов массива
 *
 * @param a - первое число
 * @param b - второе число
 * @returns {number}
 */
/*
function compare(a, b) {
    return a - b;
}

shopproducts.sort(function (a, b) {
    compare(a.price, b.price);
});*/

console.log(shopproducts);

/*Задание 6*/

for (let i = 0; i <= 9; console.log(i++)){}

/*Задание 7*/
let arr = [];
for (let i = 1; i <= 20; i++){
    for(let j = 1; j <= i; j++){
        arr.push("x");
    }
    console.log(arr.join(""));
    arr = [];
}
