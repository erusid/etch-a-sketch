const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = "CLEAR";
document.body.appendChild(clear);

function createDivs(num1, num2) {

    for ( i = 0; i < num1 * num2; i++ ) {

        let squares = document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);

        squares.addEventListener('mousedown', (e) => {
            squares.style.backgroundColor = 'black';
        });
    }
}

function clickSquare() {

    squares.style.backgroundColor = 'black';
}

function clearDivs() {

    location.reload();
}

createDivs(16, 16);

clear.addEventListener('click', clearDivs);