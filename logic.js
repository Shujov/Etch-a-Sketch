
function addSquares(numSquares){

    const canvas = document.querySelector(".canvas");

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.onmouseover = function(){this.style.backgroundColor = "black"};
        canvas.appendChild(square);
    }

}

function setWidthSquares(numSquares){
    document.documentElement.style.setProperty("--squareBasis" , (100/numSquares) + "%");
}


function initializeGrid(gridSize){
    setWidthSquares(gridSize);
    addSquares(gridSize**2);
}

function reInitializeGrid(){
    document.querySelector(".canvas").innerHTML = "";
    initializeGrid(this.value);
}

initializeGrid(16); // The default grid is 16x16
document.querySelector("#numSquares").addEventListener("change", reInitializeGrid);
