/*
 * Уже в процессе подумала, что удобнее было бы через  всё сделать через класс для корзины и конструктор,
 * чтобы не париться со всякими подсчётами, но переделывать уже не стала
 * В другой раз сделаю удобнее)
 */

let products = document.querySelectorAll('.product');
let cart = document.querySelector('.cart');
let boughtItems = cart.querySelector('.boughtItems');
let boughtAmount = cart.querySelector('.boughtAmount--amount');
let amount = 0;

//Массив товаров, добавленных в корзину, куда я запишу количество товаров одного наименования и номер строки в корзине,
// где такие уже лежат
let cartItems = new Map();

products.forEach(function (product, id) {

    window.addEventListener('load', function () {
        const img = product.querySelector('.product--img');
        img.style.backgroundImage = `url('https://picsum.photos/200/120.webp?random${id}')`;
    });

    const btn = product.querySelector('.btn');
    btn.addEventListener('click', function (event) {
        addToCart(product);
    });

});

function addToCart(product) {
    const price = product.querySelector('.price').innerText;
    const name = product.querySelector('.product--name').innerText;
    const id = product.id;
    let emptyDescription = cart.querySelector('p');


    if(emptyDescription){
        emptyDescription.remove();
        boughtAmount.innerHTML = '';
    }

    if(!cartItems.has(id)){
        /*Если для этого товара нет записи в массиве cartItems, т.е он добавляется в корзину в первый раз,
        * то создаём для него запись по айди и записываем количество таких товаров в корзине (был 0, теперь 1) и номер строки,
        * где этот товар теперь будет выводиться*/
        cartItems.set(id, [1, boughtItems.childElementCount]);
        let item = document.createElement('li');
        item.innerHTML = `<span class="boughtItems--name">${name}</span><span class="boughtItems--count">1</span><span class="boughtItems--price">${price} р.</span><span class="boughtItems--amountPrice">${price} р.</span>`;
        boughtItems.appendChild(item);
        console.dir(cartItems);
    }
    else{
        /*А если есть, то добавляем к количеству в строке ещё один и добавляем в его запись единичку к количеству,
        * а так же вписываем в строку новое количество положенных товаров этого наименования и общую суммму для них*/
        let value =  cartItems.get(id);
        value[0]+=1;
        cartItems.set(id, [value[0],value[1]]);

        let itemsList = boughtItems.children;
        let count = itemsList[value[1]].querySelector('.boughtItems--count');
        count.innerText = value[0];
        let amountPrice = itemsList[value[1]].querySelector('.boughtItems--amountPrice');
        amountPrice.innerText = `${price * value[0]} р.`;
    }
    //под конец обновляем общую сумму корзины
    amount += Number(price);
    boughtAmount.innerHTML = amount;
}