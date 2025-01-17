var noOfSquares = 6;
var arr = [];
var picked;
var squares = document.getElementsByClassName("square");
var targetColor = document.getElementById("targetColor");
var message = document.getElementById("message");
var head = document.querySelector("h1");
var reset = document.getElementById("NewColor");

init();

function init() {
    // Generate random colored palette
    arr = generateRandomColor(noOfSquares);
    // Get target color randomly from the array
    picked = arr[randomPickedColorIndex()];
    // Update target RGB display
    targetColor.textContent = picked;
    
    for (var i = 0; i < squares.length; i++) {
        // Setting square's color one by one to palette color
        squares[i].style.backgroundColor = arr[i];
        
        // Adding eventListener to all squares
        squares[i].addEventListener("click", function() {
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "green";
                changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again";
                message.style.color = "red";
                this.style.backgroundColor = "#232323";
            }
        });
    }

    // Adding eventListener to reset button
    reset.addEventListener("click", resetIn);
}

function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++) {
        color.push(rgbGenerator());
    }
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}

function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
}

