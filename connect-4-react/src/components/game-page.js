// import Connect4 from "../gameLogic";
// import { Client } from 'boardgame.io/react';

// export default function GamePage(props) {
//   // const { } = props;

//   return Client({ game: Connect4 } );
// }

import React, { useState } from "react";
import GameBoard from './gameBoard'

const ConnectFour = () => {
  const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("red");

  const makeMove = (column) => {
    for (let i = 5; i >= 0; i--) {
      if (!board[i][column]) {
        let newBoard = board.slice();
        newBoard[i][column] = currentPlayer;
        setBoard(newBoard);
        break;
      }
    }
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
    checkForEnd();
  };

  return (
    <div>
      <GameBoard board={board} makeMove={makeMove} />
    </div>
  );
};
