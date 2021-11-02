let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let sound = document.querySelector(".sound");

play.addEventListener('click', function(){
    sound.play();
    play.classList.add("show");
    pause.classList.remove("show");
});
pause.addEventListener('click', function(){
    sound.pause();
    pause.classList.add("show");
    play.classList.remove("show");
});
