
let cookies = 0;
const musicBtn = document.querySelector('.musicBtn');
const music = new Audio("sound/logo.mp3 ");



const cookiesCount = document.querySelector('.cookies');
const cookiebtn = document.querySelector('.cookie');
const upgrades = document.querySelectorAll('.upgrade');
const strongClick = document.querySelector('.strongClick');
const clickValue = document.querySelector('.clickValue');
const resetBtn = document.querySelector('.resetBtn');
const themeBtn = document.querySelector(".themeBtn");




let autoClick = 0;
let clickPower = 1;
let bonus = 0;
let achievement = false;

cookiebtn.addEventListener("click", () => {
    cookies = cookies + clickPower;
    bonus = Math.floor(Math.random() * 10);

    if (bonus === 5) {
    cookies = cookies + 50;
    alert("BONUS +50 🍪");
    }

    cookiesCount.textContent = cookies;

    if (cookies > 100 ) {

    achievement = true;

    alert("Pasiekei 100 sausainiu! 🏆");

}
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

let darkMode = false;

themeBtn.addEventListener("click", () => {
    if(darkMode == false) {
        document.body.style.backgroundImage =
        "none";
        document.body.style.backgroundColor =
        "black";
        document.body.style.color =
        "white";
        darkMode = true;

    }

    else {

        document.body.style.backgroundImage =
        'url("img/tema.jpg")';
        document.body.style.color =
        "black";
        darkMode = false;

    }

});




setInterval(() => {
    cookies = cookies + autoClick;
    cookiesCount.textContent = cookies;
}, 1000);





