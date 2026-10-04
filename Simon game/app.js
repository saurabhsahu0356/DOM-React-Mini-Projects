let h2 = document.querySelector("h2");

let gameSeq = [];
let userSeq = [];

let btn = ["c1", "c2", "c3", "c4"];

let start = false;
let level = 0;


// Start game
document.addEventListener("keydown", function () {
    if (start == false) {
        start = true;
        levelUp();
    }
});


// Button flash
function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


// Level
function levelUp() {

    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btn[ranIdx];

    gameSeq.push(ranColor);

    let ranBtn = document.querySelector(`.${ranColor}`);

    btnFlash(ranBtn);
}


// User click
function btnPress() {

    let userColor = this.classList[1];

    userSeq.push(userColor);

    btnFlash(this);

    if (userSeq[userSeq.length - 1] != gameSeq[userSeq.length - 1]) {
        h2.innerText = `Game Over !  Your Score : ${level}`;
        start = false;
        gameSeq = [];
        level = 0;
        return;
    }

    if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 500);
    }
}


// Add click event
let allBtns = document.querySelectorAll(".btn");

for (let b of allBtns) {
    b.addEventListener("click", btnPress);
}