export const setBoardSize = (x, y) => {
  const board = [];
  let gameSizeX;
  let gameSizeY;

  //x coords 0 to x left to right, see line 31
  if (x > 5 && x < 12) {
    gameSizeX = x;
  } else {
    gameSizeX = 7;
  }

  //y coords 0 to x top to bottom , see line 31
  if (y > 5 && x < 12) {
    gameSizeY = y;
  } else {
    gameSizeY = 6;
  }

  //custom board creator
  for (let i = 0; i < gameSizeY; i++) {
    const temp = [];
    for (let j = 0; j < gameSizeX; j++) {
      temp.push(null);
    }
    board.push(temp);
  }

  return board;

  // example
  //       x0    x1    x2    x3    x4
  // y0 [[null, null, null, null, null],
  // y1  [null, null, null, null, null],
  // y2  [null, null, null, null, null],
  // y3  [null, null, null, null, null],
  // y4  [null, null, null, null, null]]
};

export function findLowestCellByColumn(cells, column) {
  // iterates user selected column, if cell is null, return index position
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i][column] === null) {
      return i;
    }
  }
}

const horizontalCheck = (board, columns, rows, connectX) => {
  // horizontal win check
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < columns - (connectX - 1); j++) {
      if (board[i][j] !== null) {
        // check player ID in a horizontal line to determine if "connectX" exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          if (board[i][j + k] !== board[i][j + (k + 1)]) {
            break;
          }
          // at index k = connectX - 2, all paired segments should have been verified, for connect 5, if k reaches index 3 then we have a successful win check
          if (k === connectX - 2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

const verticalCheck = (board, columns, rows, connectX) => {
  for (let i = 0; i < columns; i++) {
    for (let j = rows - 1; j >= rows - (connectX - 1); j--) {
      if (board[j][i] !== null) {

        // check player ID in a vertical line to determine if "connectX" exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          if (board[j - k][i] !== board[j - (k + 1)][i]) {
            break;
          }
          // at index k = connectX - 2, all connectX segments should have been verified, for connect 5, if k reaches index 3 then we have a successful win check
          if (k === connectX - 2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

const diagonalCheck = (board, columns, rows, connectX) => {
  // diagonal win check (bottom left to top right)
  for (let i = connectX - 1; i < rows; i++) {
    for (let j = 0; j < columns - (connectX - 1); j++) {
      if (board[i][j] !== null) {
        //check player ID in a diagonal bottom left to top right line to determine if 4 exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          if (board[i - k][j + k] !== board[i - (k + 1)][j + (k + 1)]) {
            break;
          }
          // at index k = connectX - 2, all connectX segments should have been verified, for connect 5, if k reaches index 3 then we have a successful win check
          if (k === connectX - 2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

const antiDiagonalCheck = (board, columns, rows, connectX) => {
  // anti diagonal win check (top left to bottom right)
  for (let i = 0; i < rows - (connectX - 1); i++) {
    for (let j = 0; j < columns - (connectX - 1); j++) {
      if (board[i][j] !== null) {
        //check player ID in a reverse diagonal top left to bottom right line to determine if 4 exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          if (board[i + k][j + k] !== board[i + (k + 1)][j + (k + 1)]) {
            break;
          }
          // at index k = connectX - 2, all connectX segments should have been verified, for connect 5, if k reaches index 3 then we have a successful win check
          if (k === connectX - 2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

export function checkWinner(board, columns, rows, winCondition) {
  //add wincondition parameters so you cant have connect 9 on a 5x5 board
  // do it based on game board size, if winCondition is 
  //minimum board size 7x6

  let connectX;

  if (winCondition > 4 && winCondition < 9) {
    connectX = winCondition;
  } else {
    connectX = 4;
  }

  if (horizontalCheck(board, columns, rows, connectX) || verticalCheck(board, columns, rows, connectX) || diagonalCheck(board, columns, rows, connectX) || antiDiagonalCheck(board, columns, rows, connectX)) {
    return true;
  }
}

// Return false if null value exists in board, returns true if all cells in board are occupied and no further moves can be made
export function IsDraw(cells) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}