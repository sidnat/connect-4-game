import React from 'react';
import Board from './board';
import './game.css';
import { Button } from '@mui/material';

export default function GAME() {
  const status = 'Next player is X';
  const moves = (
    <Button variant="contained" color="success">Start Game</Button>
  );

  const squares = Array(42).fill(null);

  return (
    <div>
      <div className="game-info spacebetween spaceunder">
        <div>{moves}</div>
        <div>{status}</div>
      </div>
      <div classNames="game-board">
        <Board squares={squares}></Board>
      </div>
    </div>
  );

}

