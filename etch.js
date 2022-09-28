
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = "CLEAR";
document.body.appendChild(clear);

function createDivs(rows, cols) {

    for (i = 0; i < rows; i++) {

        let row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    
        for (j = 0; j < cols; j++) {

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

createDivs(32, 32);

clear.addEventListener('click', clearDivs);