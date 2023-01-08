const board = (x, y) => {
  const board = [];
  let gameSizeX;
  let gameSizeY;

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

  const userIsSelectingColumn = 0; //should be user inputted variable

  board[4][userIsSelectingColumn] = '1'; //player 1 moves
  board[3][userIsSelectingColumn] = '2'; //player 2 moves
  console.log(board);

  // iterating backwards from y-max to y-min, aka bottom y coord to top y coord.
  console.log("Begin iterating to find free spot:");
  for (let i = gameSizeY - 1; i >= 0; i--) {
    console.log(`column x = ${userIsSelectingColumn}, row y = ${i}: ( ${Boolean(board[i][userIsSelectingColumn])} ), can I put my piece here? `);

    if (board[i][userIsSelectingColumn] !== '1' && board[i][userIsSelectingColumn] !== '2') {
      console.log(`Yes! No board piece found, I can drop a piece at x = ${userIsSelectingColumn}, y = ${i}`);

      // create function to drop new player piece in
      // make the logic for the sql game board position update
      // flip turn value in sql db  

      break;
    } else {
      console.log(`No! Player "${board[i][userIsSelectingColumn]}" board piece exists at column x = ${userIsSelectingColumn}, row y = ${i}`);
    }

    // write a function to check board for winner, diagonal, horizontal ,vertical

    // if winner exists, update db record with winner
  }
};

//test board
board(7, 5);

//console log outputs (without xy coords on board)

//     x0  x1 x2 x3 x4 x5 x6
// y0 [[0,  0, 0, 0, 0, 0, 0],
// y1  [0,  0, 0, 0, 0, 0, 0],
// y2  [0,  0, 0, 0, 0, 0, 0],
// y3 ['2', 0, 0, 0, 0, 0, 0],
// y4 ['1', 0, 0, 0, 0, 0, 0]]

// Begin iterating to find free spot:
// column x = 0, row y = 4: ( true ), can I put my piece here? 
// No! Player "1" board piece exists at column x = 0, row y = 4
// column x = 0, row y = 3: ( true ), can I put my piece here? 
// No! Player "2" board piece exists at column x = 0, row y = 3
// column x = 0, row y = 2: ( false ), can I put my piece here? 
// Yes! No board piece found, I can drop a piece at x = 0, y = 2




// export default board;