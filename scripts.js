
let mouseClicked = false;
let mouseDown = false;
let randomEnabled = false;
let normalColor = true;
let eraserMode = false;
let eraserButton = document.getElementById("eraser");
let randomButton = document.getElementById("random");
let colorPicker = document.querySelector("#colorpicker");

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
        newSquare.draggable = false;

        
        newSquare.addEventListener('mouseover', colorPixel);
        newSquare.addEventListener('mousedown', activateColor);
        newSquare.addEventListener('mouseup', desactivateColoring);

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

function colorPixel(square){
    if (mouseDown || mouseClicked){
        if(randomEnabled){
            square.target.style.backgroundColor = `rgb(${randomNumber(0, 255)} ${randomNumber(0, 255)} ${randomNumber(0, 255)} / 100%)`;
        }else if(normalColor){
            square.target.style.backgroundColor = getColor();
        }else if(eraserMode){
            square.target.style.backgroundColor = "#fff";
        }
    }
}


function activateColor(event){
    event.preventDefault();
    mouseDown = true;
    colorPixel(event);
}

function desactivateColoring() {
    mouseDown = false;
} 

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min); //get random number formula
}

//EVENT LISTENER FOR THE RANDOM COLOR BUTTON

randomButton.addEventListener("click", () =>{
    randomEnabled = true;
    eraserMode = false;
});

//LISTENER FOR CUSTOM COLOR AGAIN

colorPicker.addEventListener("input", () =>{
    normalColor = true;
    eraserMode = false;
    randomEnabled = false;
});

//LISTENER FOR ERASER BUTTON

eraserButton.addEventListener("click", () =>{
    normalColor = false;
    randomEnabled = false;
    eraserMode = true;
});
createGrid(16);// load by default


