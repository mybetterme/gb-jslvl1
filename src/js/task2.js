const descriptions = [
    "Описание товара 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Описание товара 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Описание товара 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
];

const buttons = document.querySelectorAll('.descr-btn');
buttons.forEach(function (el, id) {
   el.addEventListener ("click", function (event) {
       let product = event.target.parentNode;
       const img = product.querySelector('img');
       const btn = product.querySelector('.descr-btn');
       if(!product.classList.contains("active")){
           const description = document.createElement('div');
           description.classList.add("desc");
           description.innerText = descriptions[id];
           product.classList.add("active");
           img.insertAdjacentElement("beforebegin", description);
           img.style.display = "none";
           btn.innerText = "Отмена";
       }
       else{
           product.classList.remove("active");
           img.style.display = "block";
           btn.innerText = "Подробнее";
           const desc = product.querySelector('.desc');
           desc.remove();
       }
   });
});
