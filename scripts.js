
function createGrid(gridDimensions){

    document.querySelector("#container").innerHTML = ""; //clean the grid to make a new one
    let grid = document.getElementById("container");
    let gridSize = gridDimensions * gridDimensions;

    for (let i = 0; i < gridSize; i++){

        let newSquare = document.createElement("div");
        newSquare.setAttribute("id", "square");
        newSquare.style.border = "1px solid black";
        // size calculations
        newSquare.style.width= `${100 / gridDimensions}%`;
        newSquare.style.height= `${100 / gridDimensions}%`;

        newSquare.addEventListener("mouseover", () => {

            newSquare.style.backgroundColor = getColor();

        });
        
        grid.appendChild(newSquare);
    }
}

function clearGrid(){
    let squares = document.querySelectorAll("#square");
    squares.forEach((square) => {
        square.style.backgroundColor = "#fff";
    });       
}

function customGrid(){
    let gridDim = window.prompt("Enter a number of pixels you want in your canvas (1-100)");
    
    if(gridDim < 1 || gridDim > 100){
        alert("Please enter a valid number!! 1-100");
    }else{
        createGrid(gridDim);
    }
}

function getColor(){
    return color = document.getElementById("colorpicker").value;
}


createGrid(16);// load by default


