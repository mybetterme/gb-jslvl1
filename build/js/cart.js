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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqINCj0LbQtSDQsiDQv9GA0L7RhtC10YHRgdC1INC/0L7QtNGD0LzQsNC70LAsINGH0YLQviDRg9C00L7QsdC90LXQtSDQsdGL0LvQviDQsdGLINGH0LXRgNC10LcgINCy0YHRkSDRgdC00LXQu9Cw0YLRjCDRh9C10YDQtdC3INC60LvQsNGB0YEg0LTQu9GPINC60L7RgNC30LjQvdGLINC4INC60L7QvdGB0YLRgNGD0LrRgtC+0YAsXHJcbiAqINGH0YLQvtCx0Ysg0L3QtSDQv9Cw0YDQuNGC0YzRgdGPINGB0L4g0LLRgdGP0LrQuNC80Lgg0L/QvtC00YHRh9GR0YLQsNC80LgsINC90L4g0L/QtdGA0LXQtNC10LvRi9Cy0LDRgtGMINGD0LbQtSDQvdC1INGB0YLQsNC70LBcclxuICog0JIg0LTRgNGD0LPQvtC5INGA0LDQtyDRgdC00LXQu9Cw0Y4g0YPQtNC+0LHQvdC10LUpXHJcbiAqL1xyXG5cclxubGV0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcclxubGV0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpO1xyXG5sZXQgYm91Z2h0SXRlbXMgPSBjYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5ib3VnaHRJdGVtcycpO1xyXG5sZXQgYm91Z2h0QW1vdW50ID0gY2FydC5xdWVyeVNlbGVjdG9yKCcuYm91Z2h0QW1vdW50LS1hbW91bnQnKTtcclxubGV0IGFtb3VudCA9IDA7XHJcblxyXG4vL9Cc0LDRgdGB0LjQsiDRgtC+0LLQsNGA0L7Qsiwg0LTQvtCx0LDQstC70LXQvdC90YvRhSDQsiDQutC+0YDQt9C40L3Rgywg0LrRg9C00LAg0Y8g0LfQsNC/0LjRiNGDINC60L7Qu9C40YfQtdGB0YLQstC+INGC0L7QstCw0YDQvtCyINC+0LTQvdC+0LPQviDQvdCw0LjQvNC10L3QvtCy0LDQvdC40Y8g0Lgg0L3QvtC80LXRgCDRgdGC0YDQvtC60Lgg0LIg0LrQvtGA0LfQuNC90LUsXHJcbi8vINCz0LTQtSDRgtCw0LrQuNC1INGD0LbQtSDQu9C10LbQsNGCXHJcbmxldCBjYXJ0SXRlbXMgPSBuZXcgTWFwKCk7XHJcblxyXG5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0LCBpZCkge1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGltZyA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtLWltZycpO1xyXG4gICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzEyMC53ZWJwP3JhbmRvbSR7aWR9JylgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBhZGRUb0NhcnQocHJvZHVjdCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9DYXJ0KHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IHByaWNlID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS5pbm5lclRleHQ7XHJcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC0tbmFtZScpLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IGlkID0gcHJvZHVjdC5pZDtcclxuICAgIGxldCBlbXB0eURlc2NyaXB0aW9uID0gY2FydC5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcblxyXG5cclxuICAgIGlmKGVtcHR5RGVzY3JpcHRpb24pe1xyXG4gICAgICAgIGVtcHR5RGVzY3JpcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgYm91Z2h0QW1vdW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjYXJ0SXRlbXMuaGFzKGlkKSl7XHJcbiAgICAgICAgLyrQldGB0LvQuCDQtNC70Y8g0Y3RgtC+0LPQviDRgtC+0LLQsNGA0LAg0L3QtdGCINC30LDQv9C40YHQuCDQsiDQvNCw0YHRgdC40LLQtSBjYXJ0SXRlbXMsINGCLtC1INC+0L0g0LTQvtCx0LDQstC70Y/QtdGC0YHRjyDQsiDQutC+0YDQt9C40L3RgyDQsiDQv9C10YDQstGL0Lkg0YDQsNC3LFxyXG4gICAgICAgICog0YLQviDRgdC+0LfQtNCw0ZHQvCDQtNC70Y8g0L3QtdCz0L4g0LfQsNC/0LjRgdGMINC/0L4g0LDQudC00Lgg0Lgg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0YLQsNC60LjRhSDRgtC+0LLQsNGA0L7QsiDQsiDQutC+0YDQt9C40L3QtSAo0LHRi9C7IDAsINGC0LXQv9C10YDRjCAxKSDQuCDQvdC+0LzQtdGAINGB0YLRgNC+0LrQuCxcclxuICAgICAgICAqINCz0LTQtSDRjdGC0L7RgiDRgtC+0LLQsNGAINGC0LXQv9C10YDRjCDQsdGD0LTQtdGCINCy0YvQstC+0LTQuNGC0YzRgdGPKi9cclxuICAgICAgICBjYXJ0SXRlbXMuc2V0KGlkLCBbMSwgYm91Z2h0SXRlbXMuY2hpbGRFbGVtZW50Q291bnRdKTtcclxuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJib3VnaHRJdGVtcy0tbmFtZVwiPiR7bmFtZX08L3NwYW4+PHNwYW4gY2xhc3M9XCJib3VnaHRJdGVtcy0tY291bnRcIj4xPC9zcGFuPjxzcGFuIGNsYXNzPVwiYm91Z2h0SXRlbXMtLXByaWNlXCI+JHtwcmljZX0g0YAuPC9zcGFuPjxzcGFuIGNsYXNzPVwiYm91Z2h0SXRlbXMtLWFtb3VudFByaWNlXCI+JHtwcmljZX0g0YAuPC9zcGFuPmA7XHJcbiAgICAgICAgYm91Z2h0SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgY29uc29sZS5kaXIoY2FydEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgLyrQkCDQtdGB0LvQuCDQtdGB0YLRjCwg0YLQviDQtNC+0LHQsNCy0LvRj9C10Lwg0Log0LrQvtC70LjRh9C10YHRgtCy0YMg0LIg0YHRgtGA0L7QutC1INC10YnRkSDQvtC00LjQvSDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0LXQs9C+INC30LDQv9C40YHRjCDQtdC00LjQvdC40YfQutGDINC6INC60L7Qu9C40YfQtdGB0YLQstGDLFxyXG4gICAgICAgICog0LAg0YLQsNC6INC20LUg0LLQv9C40YHRi9Cy0LDQtdC8INCyINGB0YLRgNC+0LrRgyDQvdC+0LLQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qu9C+0LbQtdC90L3Ri9GFINGC0L7QstCw0YDQvtCyINGN0YLQvtCz0L4g0L3QsNC40LzQtdC90L7QstCw0L3QuNGPINC4INC+0LHRidGD0Y4g0YHRg9C80LzQvNGDINC00LvRjyDQvdC40YUqL1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICBjYXJ0SXRlbXMuZ2V0KGlkKTtcclxuICAgICAgICB2YWx1ZVswXSs9MTtcclxuICAgICAgICBjYXJ0SXRlbXMuc2V0KGlkLCBbdmFsdWVbMF0sdmFsdWVbMV1dKTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zTGlzdCA9IGJvdWdodEl0ZW1zLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBjb3VudCA9IGl0ZW1zTGlzdFt2YWx1ZVsxXV0ucXVlcnlTZWxlY3RvcignLmJvdWdodEl0ZW1zLS1jb3VudCcpO1xyXG4gICAgICAgIGNvdW50LmlubmVyVGV4dCA9IHZhbHVlWzBdO1xyXG4gICAgICAgIGxldCBhbW91bnRQcmljZSA9IGl0ZW1zTGlzdFt2YWx1ZVsxXV0ucXVlcnlTZWxlY3RvcignLmJvdWdodEl0ZW1zLS1hbW91bnRQcmljZScpO1xyXG4gICAgICAgIGFtb3VudFByaWNlLmlubmVyVGV4dCA9IGAke3ByaWNlICogdmFsdWVbMF19INGALmA7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QtCDQutC+0L3QtdGGINC+0LHQvdC+0LLQu9GP0LXQvCDQvtCx0YnRg9GOINGB0YPQvNC80YMg0LrQvtGA0LfQuNC90YtcclxuICAgIGFtb3VudCArPSBOdW1iZXIocHJpY2UpO1xyXG4gICAgYm91Z2h0QW1vdW50LmlubmVySFRNTCA9IGFtb3VudDtcclxufSJdLCJmaWxlIjoiY2FydC5qcyJ9
