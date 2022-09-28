const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);


function createDivs(num1, num2) {

    for ( i = 0; i < num1 * num2; i++ ) {
        let squares = document.createElement('div');
        squares.classList.add('squares')
        container.appendChild(squares);
        
    }

    squares.addEventListener('click', (e) => {
        e.style.backgroundColor = 'black';
    });

}

createDivs(16, 16);