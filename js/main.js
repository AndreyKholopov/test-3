"use-strict";

const videoContent = document.querySelector(".video-content");
const formContent = document.querySelector('.form')
const grayBackground = document.querySelector(".gray-background");

function startVideo (state) {
   videoContent.style.display = state;
   grayBackground.style.display = state;
};

function popoutForm (state) {
   window.scrollTo(pageXOffset, 0)
   formContent.style.display = state;
   grayBackground.style.display = state;
};
