let content = document.querySelector('.content');
let okBtn = document.querySelector('.okBtn');
let submitBtn = document.querySelector('.submitBtn');
let imgold = document.querySelector('.imgold');

submitBtn.addEventListener('click',function(){
    content.classList.add('popup');
   imgold.style.scale = 1;
})
okBtn.addEventListener('click',function(){
    content.classList.remove('popup');
    imgold.style.scale = 0;



})