const SQUARE_SECTION_SIZE = 600;
const squareSection = document.getElementById("squareSection");

if (!squareSection.children.length) {
    drawSquare(16);
}

function drawSquare(dim) {

    let squareSize = SQUARE_SECTION_SIZE / dim;
    let numberOfSquares = dim * dim;

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");

        square.classList.add("cell");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        squareSection.appendChild(square);
    }
}

function generateRandomHexColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);

    // Convert the number to a hex string
    let hexColor = randomNumber.toString(16);
    // Pad the string with leading zeros if necessary to ensure 6 digits
    hexColor = hexColor.padStart(6, '0');

    return `#${hexColor}`;
}

const cells = document.querySelectorAll(".cell");

cells.forEach(function (cell) {
    cell.addEventListener("mouseover", function(){
        const randomColor = generateRandomHexColor();
        cell.style.backgroundColor = randomColor;
    });
    
});

const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", function() {
    cells.forEach(function(cell){
        cell.style.backgroundColor = "#FFF2EF";
    });
});
