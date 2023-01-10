// import { Client } from 'boardgame.io/react';

// export default function GamePage(props) {
//   // const { } = props;

//   return Client({ game: Connect4 } );
// }

// import React, { useState } from "react";
// import Connect4 from '../gameLogic'

// const GamePage = () => {
//   const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(null)));
//   const [currentPlayer, setCurrentPlayer] = useState("red");

//   const makeMove = (column) => {
//     for (let i = 5; i >= 0; i--) {
//       if (!board[i][column]) {
//         let newBoard = board.slice();
//         newBoard[i][column] = currentPlayer;
//         setBoard(newBoard);
//         break;
//       }
//     }
//     setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
//     checkForEnd();
//   };

//   return (
//     <div>
//       <GameBoard board={board} makeMove={makeMove} />
//     </div>
//   );
// };

// export default GamePage;


// import React from 'react';
// import { Client } from 'boardgame.io/react';
// import Connect4 from './game';
// import Board from './board';

// const Connect4Client = Client({
//   game: Connect4,
//   board: Board,
// });

// const GamePage = () => (
//   <div>
//     <Connect4Client playerID="0" />
//   </div>
// );

// export default GamePage;


import { Client } from 'boardgame.io/react';
import Connect4 from "../gameLogic";

export default function GamePage() {
  return (
    // <Client game={Connect4}>
      // {/* Your React components that renders the UI */}
    // </Client>
    // Client({ game: Connect4 })
    Client({ game: Connect4})
  )
}