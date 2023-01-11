
// First iterate through board to determine index positions => boarditeration
// Then update index in correct row array to colour based on the playerID => boarditeration
// Then Run win check => checkwinner
// draw game full board logic => Check turn counter is greater than 42
// If no winner, then change the turn and 
// If there is a winner, send update to databse and end the game


export const gameFlow = (playerID, selectedColumn) => {
  if (boardIteration(playerID, selectedColumn)) {
    checkWinner()
  }



}




const board = [];
let winner;
let turn = 0;
let gameSizeX;
let gameSizeY;
let x = 7
let y = 6

const setBoardSize = (x, y) => {
  //minimum board size 5x5
  //x coords 0 to x left to right, see line 21
  if (x > 5) {
    gameSizeX = x;
    } else {
    gameSizeX = 5;
  }

  //y coords 0 to x top to bottom , see line 21
  if (y > 5) {
    gameSizeY = y;
  } else {
    gameSizeY = 5;
  }

  //     x0 x1 x2 x3 x4
  // y0 [[null, 0, 0, 0, 0],
  // y1  [0, 0, 0, 0, 0],
  // y2  [0, 0, 0, 0, 0],
  // y3  [0, 0, 0, 0, 0],
  // y4  [0, 0, 0, 0, 0]]
  // y5

  //custom board creator
  for (let i = 0; i < gameSizeY; i++) {
    const temp = [];
    for (let j = 0; j < gameSizeX; j++) {
      temp.push(null);
    }
    board.push(temp);
  }
}

setBoardSize(x, y);






const boardIteration = (playerID, selectedColumn) => {
  // iterating backwards from y-max to y-min, aka bottom y coord to top y coord.
  console.log("Begin iterating to find free spot:");
  // i iterates column from bottom to top
  for (let i = 5; i >= 0; i--) {
    console.log(`column x = ${selectedColumn}, row y = ${i}: ( ${Boolean(board[i][selectedColumn])} ), can I put my piece here? `);

    if (board[i][selectedColumn] !== '1' && board[i][selectedColumn] !== '2') {
      console.log(`Yes! No board piece found, I can drop a piece at x = ${selectedColumn}, y = ${i}`);

      board[i][selectedColumn] = playerID //colour
      checkWinner()
      if (!winner) {
        checkDraw(x, y)
      }

    } else {
      console.log(`No! Player "${board[i][selectedColumn]}" board piece exists at column x = ${selectedColumn}, row y = ${i}`);
    }
  }

  //if no space in column, tell player column is full
}

function checkWinner() {
  // horizontal
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 3; c++){
         if (board[r][c] != ' ') {
             if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                 setWinner(r, c);
                 return;
             }
         }
      }
 }

 // vertical
 for (let c = 0; c < columns; c++) {
     for (let r = 0; r < rows - 3; r++) {
         if (board[r][c] != ' ') {
             if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                 setWinner(r, c);
                 return;
             }
         }
     }
 }

 // anti diagonal
 for (let r = 0; r < rows - 3; r++) {
     for (let c = 0; c < columns - 3; c++) {
         if (board[r][c] != ' ') {
             if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                 setWinner(r, c);
                 return;
             }
         }
     }
 }

 // diagonal
 for (let r = 3; r < rows; r++) {
     for (let c = 0; c < columns - 3; c++) {
         if (board[r][c] != ' ') {
             if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                 setWinner(r, c);
                 return;
             }
         }
     }
 }
}

function setWinner(r, c) {
  //changes line 22
  winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
      winner.innerText = "Red Wins";             
  } else {
      winner.innerText = "Yellow Wins";
  }
  gameOver = true;
}


const checkDraw = (x, y) => {
  turn++

  if (turn === (x * y)) {
    return console.log("its a draw")
  }
}
  