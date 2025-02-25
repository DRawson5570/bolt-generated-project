let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('.game-status');

    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        if (gameOver || gameBoard[index] !== '') return;
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    });

    function checkWin() {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
          gameStatus.textContent = `Player ${gameBoard[a]} wins!`;
          gameOver = true;
          return;
        }
      }

      if (!gameBoard.includes('')) {
        gameStatus.textContent = 'It\'s a draw!';
        gameOver = true;
      }
    }
