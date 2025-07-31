let gameSeq =[];
let userSeq =[];
let arr = ["yellow","red","purple","green"];
let started =false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp(); // move inside the if block
    }
});


function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}


function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `level : ${level}`;
    let randIdx = Math.floor(Math.random() * arr.length);
    let randomcolor = arr[randIdx];
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    gameflash(randbtn);
   // console.log(randIdx); 
    //console.log(randomcolor);
     console.log(randbtn);

}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same val");
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game over,<b>Your score is ${level}<b> <br> press any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "";
        }, 200);
        reset();
    }
}

function btnPress () {
    console.log(this);
     let btn = this;
     userflash(btn);

    let userColor = btn.getAttribute("id");
     userSeq.push(userColor);
     checkAns(userSeq.length-1);

}
let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
