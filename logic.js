
function addSquares(numSquares){

    const canvas = document.querySelector(".canvas");

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        canvas.appendChild(square);
    }

}

function setWidthSquares(numSquares){

    document.documentElement.style.setProperty("--squareBasis" , (100/numSquares) + "%");

}

const gridSize = 16 

// 1. Initialization of the grid
setWidthSquares(gridSize);
addSquares(gridSize**2);


// 2. Listening for the mouse moves to do the painting
function paintSquare(){
    this.style.backgroundColor = "black";
}

const squares = document.querySelectorAll(".square").forEach(square => square.addEventListener("mouseover", paintSquare));


