
let cookies = 0;
const musicBtn = document.querySelector('.musicBtn');
const music = new Audio("sound/logo.mp3 ");



const cookiesCount = document.querySelector('.cookies');
const cookiebtn = document.querySelector('.cookie');
const upgrades = document.querySelectorAll('.upgrade');
const strongClick = document.querySelector('.strongClick');
const clickValue = document.querySelector('.clickValue');
const resetBtn = document.querySelector('.resetBtn');



let autoClick = 0;
let clickPower = 1;

cookiebtn.addEventListener("click", () => {
    cookies = cookies + clickPower;
    cookiesCount.textContent = cookies;
});

upgrades[0].addEventListener("click", () => {
    if (cookies >= 5) {
        cookies = cookies - 5;
        autoClick = autoClick + 2;
        cookiesCount.textContent = cookies;
    }
});
 upgrades[1].addEventListener("click", () => {
    if (cookies >= 10) {
        cookies = cookies - 10;
        autoClick = autoClick + 5;
        cookiesCount.textContent = cookies;
    }
});
 upgrades[2].addEventListener("click", () => {
    if (cookies >= 20) {
        cookies = cookies - 20;
        autoClick = autoClick + 10;
        cookiesCount.textContent = cookies;
    }
});

strongClick.addEventListener("click", () => {
    if (cookies >= 20) {
        cookies = cookies - 20;
        clickPower = clickPower + 2;
        cookiesCount.textContent = cookies;
        clickValue.textContent = clickPower;
    
    }
});


resetBtn.addEventListener("click", () => {
    cookies = 0;
    autoClick = 0;
    clickPower = 1;
    cookiesCount.textContent = cookies;
    clickValue.textContent = clickPower;
});

musicBtn.addEventListener("click", () => {
    music.play();
});




setInterval(() => {
    cookies = cookies + autoClick;
    cookiesCount.textContent = cookies;
}, 1000);



