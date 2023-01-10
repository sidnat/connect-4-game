const board = [];
// user passed in numbers
let gameSizeX;
let gameSizeY;

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
  // y0 [[0, 0, 0, 0, 0],
  // y1  [0, 0, 0, 0, 0],
  // y2  [0, 0, 0, 0, 0],
  // y3  [0, 0, 0, 0, 0],
  // y4  [0, 0, 0, 0, 0]]

  //custom board creator
  for (let i = 0; i < gameSizeY; i++) {
    const temp = [];
    for (let j = 0; j < gameSizeX; j++) {
      temp.push(0);
    }
    board.push(temp);
  }
}

setBoardSize(7, 5);

//     x0 x1 x2 x3 x4 x5 x6
// y0 [[0, 0, 0, 0, 0, 0, 0],
// y1  [0, 0, 0, 0, 0, 0, 0],
// y2  [0, 0, 0, 0, 0, 0, 0],
// y3  [0, 0, 0, 0, 0, 0, 0],
// y4  [0, 0, 0, 0, 0, 0, 0]]

const selectedColumn = 0; //should be user inputted variable
//userIsSelectingColumn will be an onclick column number passed through
board[4][selectedColumn] = '1'; //player 1 moves
board[3][selectedColumn] = '2'; //player 2 moves
console.log(board);

//     x0  x1 x2 x3 x4 x5 x6
// y0 [[0,  0, 0, 0, 0, 0, 0],
// y1  [0,  0, 0, 0, 0, 0, 0],
// y2  [0,  0, 0, 0, 0, 0, 0],
// y3 ['2', 0, 0, 0, 0, 0, 0],
// y4 ['1', 0, 0, 0, 0, 0, 0]]

const boardIteration = (playerID, selectedColumn) => {
  // iterating backwards from y-max to y-min, aka bottom y coord to top y coord.
  console.log("Begin iterating to find free spot:");
  // i iterates column from bottom to top
  for (let i = 5; i >= 0; i--) {
    console.log(`column x = ${selectedColumn}, row y = ${i}: ( ${Boolean(board[i][selectedColumn])} ), can I put my piece here? `);

    if (board[i][selectedColumn] !== '1' && board[i][selectedColumn] !== '2') {
      console.log(`Yes! No board piece found, I can drop a piece at x = ${selectedColumn}, y = ${i}`);

      board[i][selectedColumn] = playerID

      break;
    } else {
      console.log(`No! Player "${board[i][selectedColumn]}" board piece exists at column x = ${selectedColumn}, row y = ${i}`);
    }
  }
}

boardIteration(1, selectedColumn)

// Begin iterating to find free spot:
// column x = 0, row y = 4: ( true ), can I put my piece here? 
// No! Player "1" board piece exists at column x = 0, row y = 4
// column x = 0, row y = 3: ( true ), can I put my piece here? 
// No! Player "2" board piece exists at column x = 0, row y = 3
// column x = 0, row y = 2: ( false ), can I put my piece here? 
// Yes! No board piece found, I can drop a piece at x = 0, y = 2

// make the logic for the sql game board position update
// use boardgame.io instead
// flip turn value in sql db  

// write a function to check board for winner, diagonal, anti-diagonal, horizontal ,vertical

// if winner exists, update db record with winner

//test board

//console log outputs (without xy coords on board)

//     x0  x1 x2 x3 x4 x5 x6
// y0 [[0,  0, 0, 0, 0, 0, 0],
// y1  [0,  0, 0, 0, 0, 0, 0],
// y2  [0,  0, 0, 0, 0, 0, 0],
// y3 ['2', 0, 0, 0, 0, 0, 0],
// y4 ['1', 0, 0, 0, 0, 0, 0]]







// game creator initializes game, playerID set as first turn

// create custom board size

// default assign piece colour

// check if pieces are in x,y coordinate

// drop a piece if no pieces are there

// on successful piece drop
function setPiece() {
  if (gameOver) {
      return;
  }

  //get coords of that tile clicked
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  // figure out which row the current column should be on
  r = currColumns[c]; 

  if (r < 0) { // board[r][c] != ' '
      return;
  }

  // user board.io instead
  board[r][c] = currPlayer; //update JS board
  let tile = document.getElementById(r.toString() + "-" + c.toString());
  if (currPlayer == playerRed) {
      tile.classList.add("red-piece");
      currPlayer = playerYellow;
  }
  else {
      tile.classList.add("yellow-piece");
      currPlayer = playerRed;
  }

  r -= 1; //update the row height for that column
  currColumns[c] = r; //update the array

  checkWinner();
}

// winner checking logic, 7th turn possible winner, check win logic after 7th turn, change turn playerID


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


// winner logic horizontal, vertical, diagonal, anti-diagonal

// input winner player id into db
function setWinner(r, c) {
  let winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
      winner.innerText = "Red Wins";             
  } else {
      winner.innerText = "Yellow Wins";
  }
  gameOver = true;
}
//








// export default board;