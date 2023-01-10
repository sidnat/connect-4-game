import React from 'react';
import Board from './board';

export default function GAME() {
  const status = 'Next player is X'
  const moves =(
    <li>
      <button> Start the Game</button>
    </li>
  );

  const squares = Array(42).fill(null);

  return (
  <div>
    <div classNames="game-board">
      <Board squares={squares}></Board>
    </div>
    <div className="game-info">
      <div> {status}</div>
      <ul>{moves}</ul>
    </div>
  </div>
  );

}

