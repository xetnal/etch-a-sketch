//create a function that creates a grid inside the main container
//make the cells of equal size
//create a function that colors each cell when you mouse over it
const container = document.getElementById('container');

btn = document.getElementById("btn")

btn.addEventListener('click', () => clearGrid())
btn.addEventListener('click', () => createGrid())


const colorPicker = document.getElementById('colorPicker')


function clearGrid() {
    container.innerHTML = ""
}


function createGrid () {
    container.innerHtml = ""  
    let x = prompt('Choose your grid size!');
    for (let i = 0; i < x; i++) {    // create rows
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row) ;
        for (let j = 0; j < x; j++) {   //create columns
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);

        }; 

    };

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', () => paintCell(cell)))
function paintCell(cell) {
    cell.style.backgroundColor = colorPicker.value;

}
};








