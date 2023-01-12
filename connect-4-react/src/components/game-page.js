import React from "react";
import { Client } from 'boardgame.io/react';
import { Connect4Board } from './board';
import { Connect4 } from './game';
import './game-page.css';

const App = Client({
  game: Connect4,
  board: Connect4Board
});

export default function GamePage(props) {
  // const { } = props;

  return (
    
    <div className="row topspace">
      < App />
    </div>
    
  );
}