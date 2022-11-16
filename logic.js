
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

setWidthSquares(gridSize);

addSquares(gridSize**2);

