import { setBoardSize, findLowestCellByColumn, checkWinner, IsDraw } from '../utils/gameUtils';
import { useApplicationData } from '../hooks/useApplicationData';

//Connect 4 board
export const Connect4 = (gameSizeX, gameSizeY, winCondition) => {
  const userID = localStorage.getItem('userId');
  const { addWinToDB } = useApplicationData();

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
      if (checkWinner(G.cells, gameSizeX, gameSizeY, winCondition)) {
        if (ctx.currentPlayer === '0') {
          addWinToDB(userID);
        }
        return { winner: ctx.currentPlayer };
      }
      if (IsDraw(G.cells)) {
        return { draw: true };
      }
    },

    // try and implement ai bot in future, does not work with online multiplayer according to current boardgame.io documentation
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
