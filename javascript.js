let container = document.querySelector('#container');
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetColor);

let sizeLength = 16;

let sizeButton = document.querySelector('#setSize');
sizeButton.addEventListener('click', setSize);

function setSize() {
    cases = document.querySelectorAll('.square');
    cases.forEach(element => {
        element.remove();
    });

    sizeLength = prompt("Choose the side length of the grid", 16);

    createSquares(sizeLength);
    initializeEvents();
}

let columns;
let rows;

function hover (square) {
    square.style.backgroundColor = 'black';
}

function resetColor() {
    const cases = document.querySelectorAll('.square');
    cases.forEach(element => {
        element.style.backgroundColor = '';
    });
}

function initializeEvents() {
    const cases = document.querySelectorAll('.square');
    cases.forEach(element => {
        element.addEventListener("mouseenter", (e) => {
            hover(e.target);
        });
    });
}

function createSquares(sizeLength) {
    for (let i = 0; i < sizeLength * sizeLength; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('id', `${i}`);
        squareDiv.setAttribute('class', 'square');
        squareDiv.setAttribute('style', `width: ${600/sizeLength}px; height: ${600/sizeLength}px;`)
        container.appendChild(squareDiv);
    }
}


createSquares(sizeLength);
initializeEvents();