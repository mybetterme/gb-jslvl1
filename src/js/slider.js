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
