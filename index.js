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