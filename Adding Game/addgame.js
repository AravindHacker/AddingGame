let firstBox = document.getElementById("firstNumber");
let secondBox = document.getElementById("secondNumber");
let userInputValue = document.getElementById("userInput");
let gameText = document.getElementById("gameResult");
function restart() {
    let firstRandomBox = Math.ceil(Math.random() * 100);
    firstBox.textContent = firstRandomBox;

    let secondRandomBox = Math.ceil(Math.random() * 100);
    secondBox.textContent = secondRandomBox;
    gameText.textContent = "";
    userInputValue.value = "";
}
restart();
function checkSum() {
    let firstRandomBox = parseInt(firstBox.textContent);
    let secondRandomBox = parseInt(secondBox.textContent);
    let userRandom = parseInt(userInputValue.value);

    let sum = firstRandomBox + secondRandomBox;
    if (sum === userRandom) {
        gameText.textContent = "congratulation! You Got it right";
        gameText.style.backgroundColor = "#028a0f";
    } else {
        gameText.textContent = "please Try again!";
        gameText.style.backgroundColor = "#1e217c";
    }

}