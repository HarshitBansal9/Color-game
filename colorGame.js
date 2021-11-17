let paragraph = document.querySelector(".rgb-answer");
let resultParagraph = document.querySelector(".result")
let userButton = document.getElementsByClassName("buttons")
let x,y,z;
let rndVar;
let answer;
let answerColor;
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min + 1)) +min;
};
function disableButtons(a){
    for (let i = 0; i < userButton.length; i++) {
        userButton[i].disabled = true;
    }
}
function enableButtons(b){
    for (let i = 0; i < userButton.length; i++) {
        userButton[i].disabled = false;
    }
}
disableButtons("");
const buttonNames = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six"
];
document.querySelector(".NewColors").addEventListener("click",function(){
    document.querySelector(".result").innerText = "";
    enableButtons("");
    for (let i = 0;i <= 5;i++){
        for (let j =1;j <= 3;j++){
            rndVar= getRndInteger(0,255);
            if (j===1){
                x = rndVar
            }
            if (j===2) {
                y = rndVar;
            } else {
                z = rndVar;
            }
        }
        document.querySelector(`.${buttonNames[i]}`).style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";

    }
answer = document.querySelector(`.${buttonNames[getRndInteger(0,5)]}`);
answerColor = window.getComputedStyle(answer).backgroundColor;
paragraph.innerText = answerColor;
});
document.querySelector('.button-container').addEventListener('click', function(event) {
    var userInput = event.target.style.backgroundColor;
    if (userInput === answerColor){
        document.querySelector(".result").innerText = "You are right!";
        document.querySelector(".choose-new-colors").innerText = "Choose new colors";
        disableButtons("");
    }
    else{
        userButton.disabled = true;
        document.querySelector(".result").innerText = "You are wrong";
        disableButtons("");
        document.querySelector(".choose-new-colors").innerText = "Choose new colors";
    }
});
