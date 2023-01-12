import { setBoardSize, findLowestCellByColumn, checkWinner, IsDraw } from '../utils/gameUtils';

//hard coded game board size
export const gameSizeX = 7
export const gameSizeY = 6

//Connect 4 board
export const Connect4 = {
  setup: () => ({ cells: setBoardSize(gameSizeX, gameSizeY) }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: ({ G, playerID }, y, x) => {
      // find lowest cell using x column and inputs playerId in G.cells array
      const lowestCellInColumn = findLowestCellByColumn(G.cells, x);
      G.cells[lowestCellInColumn][x] = playerID;
    }
  },

  // ends the game if checkWinner or IsDraw function returns true
  endIf: ({ G, ctx }) => {
    if (checkWinner(G.cells, gameSizeX, gameSizeY)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },
};
