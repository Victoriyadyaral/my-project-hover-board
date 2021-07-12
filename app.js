const board = document.getElementById('board');
const colors = ['#f58f0a', '#10df21', '#42f5f5', '#f5ef42', '#07ad20', '#ed55d6', '#0a29f5', '#eb1520'];
const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));


    board.append(square);
};

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(element) {
    element.style.backgroundColor = '#1b1919';
    element.style.boxShadow = '0 0 2px #111';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}