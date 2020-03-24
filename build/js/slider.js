"use strict";
/**
на случай, если слайдеров на странице будет несколько, всё собираем в пределах одного слайдера с заданным id
*/

const slider = document.querySelector(sliderSetup.container);
const slides = slider.querySelectorAll('.slide');
const loader = slider.querySelector('.slider--loader');
const btnLeft = slider.querySelector('.nav--left');
const btnRight = slider.querySelector('.nav--right');
let activeSlideId = 0;

let setup = {
    varsInit(){
        let root = document.documentElement;
        root.style.setProperty('--slider-width', sliderSetup.width);
        root.style.setProperty('--slider-height', sliderSetup.height);
        root.style.setProperty('--slide-speed', sliderSetup.speed);
    }
};

setup.varsInit();

let slide = {
    /**
     * Чтобы не оставались старые классы от перемотки, просто их все затрём
     * Можно усложнить и удалять точечно в зависимости от направления и activeSlideId,
     * но, полагаю, для учебного слайдера это не так важно,
     * а ролять начнёт, если это будет слайдер на полторы тыщи картинок, как в ВК
     */
    clearClasses(){
      slides.forEach(function (slide) {
          slide.classList.remove('active-slide', 'previous-slide');
      })
    },

    slideLeft(){
        slide.clearClasses();
        slider.classList.add('direction-left');
        slides[activeSlideId].classList.add('previous-slide');
        if (activeSlideId!==0){
            activeSlideId-=1;
        }
        else{
            activeSlideId = slides.length - 1;
        }
        slides[activeSlideId].classList.add('active-slide');
    },

    slideRight(){
        slides[activeSlideId].classList.add('previous-slide');
        if (activeSlideId!==(slides.length - 1)){
            activeSlideId+=1;
        }
        else{
            activeSlideId = 0;
        }
        slides[activeSlideId].classList.add('active-slide');
    },


};

window.addEventListener('load', function () {
    loader.remove();
    slides[activeSlideId].classList.add('active-slide');
});
btnLeft.addEventListener('click', function (event) {
    slider.classList.add('direction-left');
    slide.clearClasses();
    slider.classList.remove('direction-right');
    slide.slideLeft();
});
btnRight.addEventListener('click', function (event) {
    slider.classList.add('direction-right');
    slide.clearClasses();
    slider.classList.remove('direction-left');
    slide.slideRight();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG7QvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0YHQu9Cw0LnQtNC10YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtSDQsdGD0LTQtdGCINC90LXRgdC60L7Qu9GM0LrQviwg0LLRgdGRINGB0L7QsdC40YDQsNC10Lwg0LIg0L/RgNC10LTQtdC70LDRhSDQvtC00L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsCDRgSDQt9Cw0LTQsNC90L3Ri9C8IGlkXHJcbiovXHJcblxyXG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlclNldHVwLmNvbnRhaW5lcik7XHJcbmNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKTtcclxuY29uc3QgbG9hZGVyID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItLWxvYWRlcicpO1xyXG5jb25zdCBidG5MZWZ0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtLWxlZnQnKTtcclxuY29uc3QgYnRuUmlnaHQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5hdi0tcmlnaHQnKTtcclxubGV0IGFjdGl2ZVNsaWRlSWQgPSAwO1xyXG5cclxubGV0IHNldHVwID0ge1xyXG4gICAgdmFyc0luaXQoKXtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNsaWRlci13aWR0aCcsIHNsaWRlclNldHVwLndpZHRoKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNsaWRlci1oZWlnaHQnLCBzbGlkZXJTZXR1cC5oZWlnaHQpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc2xpZGUtc3BlZWQnLCBzbGlkZXJTZXR1cC5zcGVlZCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5zZXR1cC52YXJzSW5pdCgpO1xyXG5cclxubGV0IHNsaWRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDQp9GC0L7QsdGLINC90LUg0L7RgdGC0LDQstCw0LvQuNGB0Ywg0YHRgtCw0YDRi9C1INC60LvQsNGB0YHRiyDQvtGCINC/0LXRgNC10LzQvtGC0LrQuCwg0L/RgNC+0YHRgtC+INC40YUg0LLRgdC1INC30LDRgtGA0ZHQvFxyXG4gICAgICog0JzQvtC20L3QviDRg9GB0LvQvtC20L3QuNGC0Ywg0Lgg0YPQtNCw0LvRj9GC0Ywg0YLQvtGH0LXRh9C90L4g0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC90LDQv9GA0LDQstC70LXQvdC40Y8g0LggYWN0aXZlU2xpZGVJZCxcclxuICAgICAqINC90L4sINC/0L7Qu9Cw0LPQsNGOLCDQtNC70Y8g0YPRh9C10LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwINGN0YLQviDQvdC1INGC0LDQuiDQstCw0LbQvdC+LFxyXG4gICAgICog0LAg0YDQvtC70Y/RgtGMINC90LDRh9C90ZHRgiwg0LXRgdC70Lgg0Y3RgtC+INCx0YPQtNC10YIg0YHQu9Cw0LnQtNC10YAg0L3QsCDQv9C+0LvRgtC+0YDRiyDRgtGL0YnQuCDQutCw0YDRgtC40L3QvtC6LCDQutCw0Log0LIg0JLQmlxyXG4gICAgICovXHJcbiAgICBjbGVhckNsYXNzZXMoKXtcclxuICAgICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2xpZGUnLCAncHJldmlvdXMtc2xpZGUnKTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVMZWZ0KCl7XHJcbiAgICAgICAgc2xpZGUuY2xlYXJDbGFzc2VzKCk7XHJcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbi1sZWZ0Jyk7XHJcbiAgICAgICAgc2xpZGVzW2FjdGl2ZVNsaWRlSWRdLmNsYXNzTGlzdC5hZGQoJ3ByZXZpb3VzLXNsaWRlJyk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSWQhPT0wKXtcclxuICAgICAgICAgICAgYWN0aXZlU2xpZGVJZC09MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYWN0aXZlU2xpZGVJZCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXNbYWN0aXZlU2xpZGVJZF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNsaWRlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNsaWRlUmlnaHQoKXtcclxuICAgICAgICBzbGlkZXNbYWN0aXZlU2xpZGVJZF0uY2xhc3NMaXN0LmFkZCgncHJldmlvdXMtc2xpZGUnKTtcclxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVJZCE9PShzbGlkZXMubGVuZ3RoIC0gMSkpe1xyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZUlkKz0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZUlkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVzW2FjdGl2ZVNsaWRlSWRdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zbGlkZScpO1xyXG4gICAgfSxcclxuXHJcblxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2FkZXIucmVtb3ZlKCk7XHJcbiAgICBzbGlkZXNbYWN0aXZlU2xpZGVJZF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNsaWRlJyk7XHJcbn0pO1xyXG5idG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnZGlyZWN0aW9uLWxlZnQnKTtcclxuICAgIHNsaWRlLmNsZWFyQ2xhc3NlcygpO1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RpcmVjdGlvbi1yaWdodCcpO1xyXG4gICAgc2xpZGUuc2xpZGVMZWZ0KCk7XHJcbn0pO1xyXG5idG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbi1yaWdodCcpO1xyXG4gICAgc2xpZGUuY2xlYXJDbGFzc2VzKCk7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlyZWN0aW9uLWxlZnQnKTtcclxuICAgIHNsaWRlLnNsaWRlUmlnaHQoKTtcclxufSk7XHJcbiJdLCJmaWxlIjoic2xpZGVyLmpzIn0=
