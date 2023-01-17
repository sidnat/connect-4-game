import { setBoardSize, findLowestCellByColumn, checkWinner, IsDraw } from '../utils/gameUtils';

//Connect 4 board
export const Connect4 = () => {
  const gameSizeX = localStorage.getItem('gameSizeX');
  const gameSizeY = localStorage.getItem('gameSizeY');

  const game = {
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

    //   ai: {
    //     enumerate: (G, ctx) => {
    //       let moves = [];

    //       for (let i = 0; i < gameSizeY; i++) {
    //         for (let j = 0; j < gameSizeX; j++) {
    //           if (G.cells[i][j] === null) {
    //             moves.push({ move: 'clickCell', args: [i][j] });
    //           }
    //         }
    //       }
    // // console.log moves
    // // see args
    // // check if ai starts from debug panel
    //       return moves;
    //     },
    //   },
  };

  return game;
};
