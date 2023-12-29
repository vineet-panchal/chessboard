function pieces() {
// function to put images of pieces onto the grid in their respective places
    document.querySelectorAll(".square").forEach(piece => { // for each square in grid
        if (piece.innerText.length !== 0) { // if length is not 0
            piece.innerHTML = `${piece.innerText} <img src="./assets/${piece.innerText}.png" alt="">`; // add image corresponding to the text
            piece.style.cursor = 'pointer'; // add style pointer
        }
    })
}

pieces();

function boardColor() {
// function to color the board
    const squares = document.querySelectorAll(".square"); // defining squares
    squares.forEach(square => { // for each square
        arr = Array.from(square.id); // get id of each square
        i = eval(arr.pop()) + eval(arr.shift()); // formula to alternate

        if (i % 2 == 0) { // if formula results to even
            square.style.backgroundColor = 'rgb(214,199,191)';
        }
        if (i % 2 !== 0) { // if formula results to odd
            square.style.backgroundColor = 'rgb(107, 65, 43)';
        }

    })
}

boardColor();

