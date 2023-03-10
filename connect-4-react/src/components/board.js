import React from 'react';
import './board.css';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

export function Connect4Board({ ctx, G, moves }) {
  let winner = '';
  let currentPlayer = ctx.currentPlayer;
  let gameOver = false;
  const gameSizeX = localStorage.getItem('gameSizeX');
  const gameSizeY = localStorage.getItem('gameSizeY');
  const winCondition = localStorage.getItem('winCondition');

  // changes current players name for info banner based on turn
  if (ctx.currentPlayer === '0') {
    currentPlayer = localStorage.getItem('playerOne');
  } else if (ctx.currentPlayer === '1') {
    currentPlayer = localStorage.getItem('playerTwo');
  }

  const onClick = (x, y) => moves.clickCell(x, y);

  // displays end game message if game is won or ends in draw
  if (ctx.gameover) {
    // when gameOver is true, player turn and win condition banner is removed
    gameOver = true;
    winner =
      // show winner banner
      ctx.gameover.winner !== undefined ? (
        <div id="winner">
          <Alert
            icon={false}
            variant="filled"
            severity="success"
            action={
              <Button href="/game" color="inherit" size="small">
                REMATCH?
              </Button>
            }
          >
            Congratulations! We have a Winner! <b>Player: {currentPlayer}</b>
          </Alert>
        </div>
      ) : (
        // show draw game banner
        <div id="winner">
          <Alert
            icon={false}
            variant="filled"
            severity="warning"
            action={
              <Button href="/game" color="inherit" size="small">
                REMATCH?
              </Button>
            }
          >
            Game has ended in a Draw! No player has won!
          </Alert>
        </div>
      );
  }

  const cellStyle = {
    border: '5px solid #555',
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
  };

  let tbody = [];
  for (let i = 0; i < gameSizeY; i++) {
    let cells = [];
    for (let j = 0; j < gameSizeX; j++) {
      const id = gameSizeX * i + j;
      cells.push(
        <td key={id}>
          {/* hard coded player '0' displays red piece*/}
          {/* {G.cells[i][j]} will display player number as text in circle*/}
          {G.cells[i][j] === '0' && <div className="circle red" style={cellStyle}></div>}
          {/* hard coded player '1' displays yellow piece*/}
          {/* {G.cells[i][j]} will display player number as text in circle*/}
          {G.cells[i][j] === '1' && <div className="circle yellow" style={cellStyle}></div>}
          {/* if cell is empty, show white background and allow click */}
          {G.cells[i][j] === null && <button className="circle white mouseOver" style={cellStyle} onClick={() => onClick(i, j)} />}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      {/* game information banner */}
      {!gameOver &&
        <Alert className="center" severity="info" action={
          <div>
            Connect X: "<b>{winCondition}</b>"
          </div>}
        >
          Current players turn: "<b>{currentPlayer}</b>"
        </Alert>
      }
      {/* win/draw game banner */}
      <div>
        {winner}
      </div>
      {/* game board */}
      <div className="border">
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    </div>
  );
}