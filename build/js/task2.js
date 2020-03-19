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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YXNrMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZXNjcmlwdGlvbnMgPSBbXHJcbiAgICBcItCe0L/QuNGB0LDQvdC40LUg0YLQvtCy0LDRgNCwIDEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiLFxyXG4gICAgXCLQntC/0LjRgdCw0L3QuNC1INGC0L7QstCw0YDQsCAyLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIixcclxuICAgIFwi0J7Qv9C40YHQsNC90LjQtSDRgtC+0LLQsNGA0LAgMy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuXTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3ItYnRuJyk7XHJcbmJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGlkKSB7XHJcbiAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICBsZXQgcHJvZHVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgY29uc3QgaW1nID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgIGNvbnN0IGJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmRlc2NyLWJ0bicpO1xyXG4gICAgICAgaWYoIXByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcclxuICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uc1tpZF07XHJcbiAgICAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgIGltZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gXCLQntGC0LzQtdC90LBcIjtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgIGJ0bi5pbm5lclRleHQgPSBcItCf0L7QtNGA0L7QsdC90LXQtVwiO1xyXG4gICAgICAgICAgIGNvbnN0IGRlc2MgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XHJcbiAgICAgICAgICAgZGVzYy5yZW1vdmUoKTtcclxuICAgICAgIH1cclxuICAgfSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6InRhc2syLmpzIn0=
