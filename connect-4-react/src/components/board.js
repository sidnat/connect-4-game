import React from 'react';
import './board.css';
import Alert from '@mui/material/Alert';
import { gameSizeX, gameSizeY } from './game';

export function Connect4Board({ ctx, G, moves }) {
  const onClick = (x, y) => moves.clickCell(x, y);

  let winner = '';

  // displays end game message if game is won or ends in draw
  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
        <div id="winner">
          <Alert variant="filled" severity="success">
            Congratulations! We have a Winner, Player: {ctx.gameover.winner}
          </Alert>
        </div>
      ) : (
        <div id="winner">
          <Alert variant="filled" severity="warning">
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
          {/* {G.cells[i][j]} will display player number as text*/}
          {G.cells[i][j] === '0' && <div className="circle red" style={cellStyle}></div>}
          {/* hard coded player '1' displays yellow piece*/}
          {/* {G.cells[i][j]} will display player number as text*/}
          {G.cells[i][j] === '1' && <div className="circle yellow" style={cellStyle}></div>}
          {/* if cell is empty, show white background and allow click */}
          {G.cells[i][j] === null && <button className="circle white" style={cellStyle} onClick={() => onClick(i, j)} />}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
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