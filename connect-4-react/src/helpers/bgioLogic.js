import { Client, Local } from 'boardgame.io/react';

const MyGame = {
  setup: () => {
    return {
      board: [],
      winner: null,
      turn: 0,
      gameSizeX: 0,
      gameSizeY: 0,
      x: 7,
      y: 6,
    };
  },
  moves: {
    placePiece(G, ctx, column) {
      let foundEmptySpot = false;
      //iterating backwards from y-max to y-min, aka bottom y coord to top y coord.
      for (let i = G.y - 1; i >= 0; i--) {
        if (G.board[i][column] !== '1' && G.board[i][column] !== '2') {
          G.board[i][column] = ctx.currentPlayer;
          foundEmptySpot = true;
          break;
        }
      }
      if (!foundEmptySpot) return;
      checkWinner(G, ctx);
      if (!G.winner) {
        checkDraw(G, ctx);
      }
    },
  },
  turn: {
    moveLimit: 1,
  },
  endIf: (G, ctx) => {
    if (G.winner !== null) {
      return G.winner;
    } else if (ctx.turn > 42) {
      return { draw: true };
    }
  },
};

function checkWinner(G, ctx) {
  // horizontal
  for (let r = 0; r < G.y; r++) {
    for (let c = 0; c < G.x - 3; c++) {
      if (G.board[r][c] != null) {
        if (
          G.board[r][c] == G.board[r][c + 1] &&
          G.board[r][c + 1] == G.board[r][c + 2] &&
          G.board[r][c + 2] == G.board[r][c + 3]
        ) {
          G.winner = ctx.currentPlayer;
          return;
        }
      }
    }
  }

  // vertical
  for (let c = 0; c < G.x; c++) {
    for (let r = 0; r < G.y - 3; r++) {
      if (G.board[r][c] != null) {
        if (
          G.board[r][c] == G.board[r + 1][c] &&
          G.board[r + 1][c] == G.board[r + 2][c] &&
          G.board[r + 2][c] == G.board[r + 3][c]
        ) {
          G.winner = ctx.currentPlayer;
          return;
        }
      }
    }
  }

  // diagonal top-left to bottom-right
  for (let c = 0; c < G.x - 3; c++) {
    for (let r = 0; r < G.y - 3; r++) {
      if (G.board[r][c] != null) {
        if (
          G.board[r][c] == G.board[r + 1][c + 1] &&
          G.board[r + 1][c + 1] == G.board[r + 2][c + 2] &&
          G.board[r + 2][c + 2] == G.board[r + 3][c + 3]
        ) {
          G.winner = ctx.currentPlayer;
          return;
        }
      }
    }
  }
  // diagonal bottom-left to top-right
  for (let c = 0; c < G.x - 3; c++) {
    for (let r = G.y - 1; r >= 3; r--) {
      if (G.board[r][c] != null) {
        if (
          G.board[r][c] == G.board[r - 1][c + 1] &&
          G.board[r - 1][c + 1] == G.board[r - 2][c + 2] &&
          G.board[r - 2][c + 2] == G.board[r - 3][c + 3]
        ) {
          G.winner = ctx.currentPlayer;
          return;
        }
      }
    }
  }
}

function checkDraw(G, ctx) {
  if (ctx.turn > 42) {
    return;
  }
}

export default MyGame