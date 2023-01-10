import { INVALID_MOVE } from 'boardgame.io/core';

const Connect4 = ({
  // Define the initial state of the game
  setup: () => ({
    // Set up the 6x7 board with no tokens placed
    board: Array(6).fill(Array(7).fill(null)),
    // Set the current player to be player 1 (red)
    currentPlayer: '0',
    // Set up an array to track the tokens placed in each column
    columnHeights: Array(7).fill(0),
  }),

  // Define the possible moves that players can make
  moves: {
    // The placeToken move allows a player to place a token in a specific column
    placeToken(G, ctx, column) {
      // Get the current player and the color of their tokens
      const currentPlayer = ctx.currentPlayer;
      const color = currentPlayer === '0' ? 'red' : 'yellow';

      // Get the height of the column where the player is trying to place a token
      const columnHeight = G.columnHeights[column];

      // If the column is already full, return an invalid move
      if (columnHeight === 6) {
        return INVALID_MOVE;
      }

      // Update the board and column heights to reflect the placed token
      G.board[columnHeight][column] = color;
      G.columnHeights[column]++;
    },
  },

  // Define the rules for ending the game
  endIf: (G, ctx) => {
    // Check if there are four tokens of the same color aligned horizontally
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (G.board[i][j] !== null &&
            G.board[i][j] === G.board[i][j + 1] &&
            G.board[i][j] === G.board[i][j + 2] &&
            G.board[i][j] === G.board[i][j + 3]) {
          return { winner: G.board[i][j] };
        }
      }
    }

    // Check if there are four tokens of the same color aligned vertically
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        if (G.board[i][j] !== null &&
            G.board[i][j] === G.board[i + 1][j] &&
            G.board[i][j] === G.board[i + 2][j] &&
            G.board[i][j] === G.board[i + 3][j]) {
          return { winner: G.board[i][j] };
        }
      }
    }

    // Check if there are four tokens of the same color aligned diagonally (top-left to bottom-right)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (G.board[i][j] !== null &&
            G.board[i][j] === G.board[i + 1][j + 1] &&
            G.board[i][j] === G.board[i + 2][j + 2] &&
            G.board[i][j] === G.board[i + 3][j + 3]) {
          return { winner: G.board[i][j] };
        }
      }
    }

    // Check if there are four tokens of the same color aligned diagonally (top-right to bottom-left)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (G.board[i][j + 3] !== null &&
            G.board[i][j + 3] === G.board[i + 1][j + 2] &&
            G.board[i][j + 3] === G.board[i + 2][j + 1] &&
            G.board[i][j + 3] === G.board[i + 3][j]) {
          return { winner: G.board[i][j + 3] };
        }
      }
    }
    // check if draw
    if(!G.board.find(v => v.find(u => u === null))) return {draw: true};
  },

  // Define the scoring function
  score: (G, ctx) => {
    if(G.winner === 'red') return 1;
    if(G.winner === 'yellow') return -1;
    return 0;
  },
});

export default Connect4;
