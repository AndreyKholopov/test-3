"use-strict";

const videoContent = document.querySelector(".video-content");
const formContent = document.querySelector('.form')
const grayBackground = document.querySelector(".gray-background");

const startVideo = state => {
   videoContent.style.display = state;
   grayBackground.style.display = state;
};

const popoutForm = state => {
   window.scrollTo(pageXOffset, 0)
   formContent.style.display = state;
   grayBackground.style.display = state;
};
