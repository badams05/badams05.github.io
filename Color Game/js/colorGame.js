const squares = document.querySelectorAll(".square");
let colors = generateRandomColors(6);
let pickedColor = pickColor();
const colorHeader = document.querySelector(".colorHeader");
const message = document.querySelector(".message");
const header = document.querySelector("h1");
const resetButton = document.querySelector(".reset");
const modeButtons = document.querySelectorAll(".mode");
const container = document.querySelector(".container");
let numSquares = 6;

init();

function init() {
    setupSquares();
    reset();
}

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        
    if(this.textContent === "EASY") {
        console.log(this.textContent);
        numSquares = 3;
        
    } else if (this.textContent === "NORMAL"){
        numSquares = 6;
    } else {
        numSquares = 9;
       
    }
    
    reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorHeader.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    header.style.backgroundColor = "steelblue";
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }

}



function setupSquares() {
    for(let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function() {
            if(squares[i].style.backgroundColor === pickedColor) {
                message.textContent = "CORRECT!";
                correct(this.style.backgroundColor);
                header.style.backgroundColor = this.style.backgroundColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Incorrect";
            }
        });
    }
}



colorHeader.textContent = pickedColor;

function correct(color) {
    for(let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    const arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(createColors());
    }
    return arr
}

function pickColor() {
    const randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum]
}

function createColors() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

resetButton.addEventListener("click", function() {
    reset();
});


