import React from 'react';
import Board from './board';
import './game.css';
import { Button } from '@mui/material';


export default function GAME() {
  const status = 'Next player is X';
  const moves = (
    <Button variant="contained" color="success">Start Game</Button>
  );

  const row1 = Array(7).fill(null);
  const row2 = Array(7).fill(null);
  const row3 = Array(7).fill(null);
  const row4 = Array(7).fill(null);
  const row5 = Array(7).fill(null);
  const row6 = Array(7).fill(null);

  return (
    <div>
    <div className="game-info spacebetween spaceunder">
      <div>{moves}</div>
      <div>{status}</div>
    </div>      
    <div className="game-board">
      <Board row1={row1} row2={row2} row3={row3} row4={row4} row5={row5} row6={row6}></Board>
    </div>
  </div>
  );

}

