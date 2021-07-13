const board = document.getElementById('board');
const colors = ['#f58f0a', '#10df21', '#42f5f5', '#f5ef42', '#07ad20', '#ed55d6', '#0a29f5', '#eb1520'];
const SQUARES_NUMBER = 1200;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);


    board.append(square);
};

function setColor(evt) {
    const element = evt.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(evt) {
    const element = evt.target;
    element.style.backgroundColor = '#1b1919';
    element.style.boxShadow = '0 0 2px #111';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}