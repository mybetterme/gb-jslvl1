"use strict";
const modal =  document.querySelector('.modal-fade-in');
const showModal = document.querySelector('.modal-on');
const hideModal = document.querySelector('.modal-off');

showModal.addEventListener('click', function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
});
hideModal.addEventListener('click', function () {
    modal.classList.add("hide");
    modal.classList.remove("show");
});