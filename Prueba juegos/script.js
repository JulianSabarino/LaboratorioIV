// script.js
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        console.log(combination);
        if (board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'T'; // si todavia tengo espacios para llenar envio un null
}

function handleClick(event) {
    if (currentPlayer === 'O' || !gameActive) return; // Evita que haga click el jugador rapido en varias celdas

    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index]) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        status.textContent = winner === 'T' ? "¡Es un empate!" : `¡Jugador ${winner} gana!`;
    } else {
        currentPlayer = 'O';
        status.textContent = `Jugador ${currentPlayer}'s turno`;
        setTimeout(playAI, 500); // Espera 0.5 segundos antes de que la IA haga su jugada
    }
}

function playAI() {
    if (!gameActive || currentPlayer !== 'O') return;

    const emptyIndices = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

    board[randomIndex] = currentPlayer;
    cells[randomIndex].textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        status.textContent = winner === 'T' ? "¡Es un empate!" : `¡Jugador ${winner} gana!`;
    } else {
        currentPlayer = 'X';
        status.textContent = `Jugador ${currentPlayer}'s turno`;
    }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));