
const input = document.createElement('button');
input.classList.add('input');
input.textContent = "HOW MANY PIXELS PER SIDE?"
document.body.appendChild(input);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = "CLEAR";
document.body.appendChild(clear);


function createDivs(divs) {

    for (i = 0; i < divs; i++) {

        let row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    
        for (j = 0; j < divs; j++) {

            let col = document.createElement('div');
            col.classList.add('columns');
            row.appendChild(col);

            col.addEventListener('mousedown', (e) => {
                col.style.backgroundColor = 'black';
            });
        }  
    }
}

function clickSquare() {

    squares.style.backgroundColor = 'black';
}

function clearDivs() {

    location.reload();
}

function promptUser(numDivs) {

    numDivs = prompt("How many?");
    return createDivs(numDivs);
}

input.addEventListener('click', promptUser);

clear.addEventListener('click', clearDivs);