
const box = document.createElement("div");
const container = document.querySelector(".container");



box.classList.add("box");

function createGrid(){

    function createRow(){

        const boxRow = document.createElement("div");
        boxRow.setAttribute("id", "boxRow");

        for (let i = 0; i < 16; i++){
            const boxToAdd = document.createElement("div");
            boxToAdd.classList.add("box")
            boxRow.appendChild(boxToAdd);
        }

        return boxRow;
    }


    for (let i = 0; i < 16; i++){
        
        container.appendChild(createRow());
    }
}

createGrid();
