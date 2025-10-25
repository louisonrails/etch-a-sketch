const SQUARE_SECTION_SIZE = 600;
const squareSection = document.getElementById("squareSection");
const resetBtn = document.querySelector(".reset-btn");
const changeDimBtn = document.querySelector(".change-dim-btn");

if (!squareSection.children.length) {
    drawSquare(16);
}

function drawSquare(dim) {

    console.log("I was called.")

    let squareSize = SQUARE_SECTION_SIZE / dim;
    let numberOfSquares = dim * dim;

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");

        square.classList.add("cell");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        squareSection.appendChild(square);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.addEventListener("mouseover", function () {
            console.log("I got hovered!");
            const randomColor = generateRandomHexColor();
            cell.style.backgroundColor = randomColor;
        });

    });

    resetBtn.addEventListener("click", function () {
        cells.forEach(function (cell) {
            cell.style.backgroundColor = "#FFF2EF";
        });
    });

}

function generateRandomHexColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);

    // Convert the number to a hex string
    let hexColor = randomNumber.toString(16);
    // Pad the string with leading zeros if necessary to ensure 6 digits
    hexColor = hexColor.padStart(6, '0');

    return `#${hexColor}`;
}

changeDimBtn.addEventListener("click", function () {
    let newDim = prompt("Enter new dimenssion(16, 24, etc).");
    squareSection.innerHTML = "";
    drawSquare(newDim);
});



