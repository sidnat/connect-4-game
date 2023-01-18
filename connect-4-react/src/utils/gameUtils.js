export const setBoardSize = (x, y) => {
  const board = [];

  //custom board creator
  for (let i = 0; i < y; i++) {
    const temp = [];
    for (let j = 0; j < x; j++) {
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
  // iterates user selected column form bottom to top, if cell is null, return index position
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i][column] === null) {
      return i;
    }
  }
}

// horizontal win check
const horizontalCheck = (board, columns, rows, connectX) => {
  // iterate from bottom row to top
  for (let i = rows - 1; i >= 0; i--) {
    // iterate from left to right as long as connectX length is met
    for (let j = 0; j < columns - (connectX - 1); j++) {
      // begining at bottom left of board
      if (board[i][j] !== null) {
        // check player ID in a horizontal line to determine if "connectX" exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          //checking if two consecutive pieces are equal

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

// vertical win check
const verticalCheck = (board, columns, rows, connectX) => {
  // iterate columns bottom to top
  for (let i = 0; i < columns; i++) {
    // iterate rows left to right
    for (let j = rows - 1; j >= rows - (connectX - 1); j--) {
      // beginning at bottom left of board
      if (board[j][i] !== null) {
        // check player ID in a vertical line to determine if "connectX" exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          //checking if two consecutive pieces are equal
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

// diagonal win check (bottom left to top right)
const diagonalCheck = (board, columns, rows, connectX) => {
  // iterate rows bottom to top as long as connectX height is met
  for (let i = connectX - 1; i < rows; i++) {
    // iterate columns left to right as long as connectX width is met
    for (let j = 0; j < columns - (connectX - 1); j++) {
      // beginning at bottom left of board
      if (board[i][j] !== null) {
        //check player ID in a diagonal bottom left to top right line to determine if 4 exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          //checking if two consecutive pieces are equal
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

// anti diagonal win check (top left to bottom right)
const antiDiagonalCheck = (board, columns, rows, connectX) => {
  // iterate rows top to bottom as long as connectX height is met
  for (let i = 0; i < rows - (connectX - 1); i++) {
    // iterate columns top to bottom as long as connectX width is met
    for (let j = 0; j < columns - (connectX - 1); j++) {
      // beginning at top left of board
      if (board[i][j] !== null) {
        //check player ID in a reverse diagonal top left to bottom right line to determine if 4 exist in a row
        for (let k = 0; k < connectX - 1; k++) {
          //checking if two consecutive pieces are equal
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

// iterates through entire board to see if ConnectX win conditions are met
export function checkWinner(board, columns, rows, connectX) {

  if (horizontalCheck(board, columns, rows, connectX) || verticalCheck(board, columns, rows, connectX) || diagonalCheck(board, columns, rows, connectX) || antiDiagonalCheck(board, columns, rows, connectX)) {
    return true;
  }
}

// returns true if all cells in board are occupied and no further moves can be made, return false if null value exists in board,
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