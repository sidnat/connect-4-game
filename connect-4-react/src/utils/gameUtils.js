export const setBoardSize = (x, y) => {
  const board = [];
  let gameSizeX;
  let gameSizeY;

  //minimum board size 7x6
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

export function checkWinner(board, columns, rows) {

  // horizontal win check
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== null) {

        //check player ID in a horizontal line to determine if 4 exist in a row
        const horizontalCheck = board[i][j] === board[i][j + 1] && board[i][j + 1] === board[i][j + 2] && board[i][j + 2] === board[i][j + 3];

        if (horizontalCheck) {
          return true;
        }
      }
    }
  }

  // vertical win check
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows - 3; j++) {
      if (board[j][i] !== null) {

        //check player ID in a vertical line to determine if 4 exist in a row
        const verticalCheck = board[j][i] === board[j + 1][i] && board[j + 1][i] === board[j + 2][i] && board[j + 2][i] === board[j + 3][i];

        if (verticalCheck) {
          return true;
        }
      }
    }
  }

  // diagonal win check (bottom left to top right)
  for (let i = 3; i < rows; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== null) {

        //check player ID in a diagonal bottom left to top right line to determine if 4 exist in a row
        const diagonalCheck = board[i][j] === board[i - 1][j + 1] && board[i - 1][j + 1] === board[i - 2][j + 2] && board[i - 2][j + 2] === board[i - 3][j + 3];

        if (diagonalCheck) {
          return true;
        }
      }
    }
  }

  // anti diagonal win check (top left to bottom right)
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < columns - 3; j++) {
      if (board[i][j] !== null) {

        //check player ID in a reverse diagonal top left to bottom right line to determine if 4 exist in a row
        const antiDiagonalCheck = board[i][j] === board[i + 1][j + 1] && board[i + 1][j + 1] === board[i + 2][j + 2] && board[i + 2][j + 2] === board[i + 3][j + 3];

        if (antiDiagonalCheck) {
          return true;
        }
      }
    }
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

