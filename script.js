let gridVal = 256;

setGrid(gridVal);

 function setGrid(gridSize){ 
    for (let i = 0; i < gridVal; i++) {
        let divElem = document.createElement("div");
        divElem.classList.add("gridBlocks")
        mainContainer.appendChild(divElem);
    } 
}

    // TODO: add button function that resets the grid 
    //  changes gridVal, calculates the number of divs to make, and calls setGrid(gridVal).
    function reset(){

    }

