import React from 'react';
import './board.css';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

export function Connect4Board({ ctx, G, moves }) {
  let winner = '';
  let currentPlayer;
  currentPlayer = ctx.currentPlayer;
  let gameOver = false;

  if (ctx.currentPlayer === '0') {
    currentPlayer = localStorage.getItem('playerOne')
  } else if (ctx.currentPlayer === '1') {
    currentPlayer = localStorage.getItem('playerTwo')
  }

  const gameSizeX = localStorage.getItem('gameSizeX')
  const gameSizeY = localStorage.getItem('gameSizeY')

  const onClick = (x, y) => moves.clickCell(x, y);

  // displays end game message if game is won or ends in draw
  if (ctx.gameover) {
    gameOver = true;
    winner =
      ctx.gameover.winner !== undefined ? (
        <div id="winner">
          <Alert
            icon={false}
            variant="filled"
            severity="success"
            action={
              // change the href once we figure react router out
              <Button href="/game" color="inherit" size="small">
                REMATCH?
              </Button>
            }
          >
            Congratulations! We have a Winner! <b>Player: {currentPlayer}</b>
          </Alert>
        </div>
      ) : (
        <div id="winner">
          <Alert
            icon={false}
            variant="filled"
            severity="warning"
            action={
              // change the href once we figure react router out
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

  // need to change "0" "1" if we get user data working to increment win count
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
      {!gameOver &&
        <Alert className="center" severity="info">
          Current players turn: <b>{currentPlayer}</b>
        </Alert>
      }
      <div>
        {winner}
      </div>
      <div className="border">
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    </div>
  );
}