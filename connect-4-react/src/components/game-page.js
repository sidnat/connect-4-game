import React from "react";
import { Client } from 'boardgame.io/react';
import { Connect4Board } from './board';
import { Connect4 } from './game';
import './game-page.css';

export default function GamePage(props) {
  const { gameSizeX, gameSizeY } = props;

  const Connect4Client = Client({
    game: Connect4(gameSizeX, gameSizeY),
    board: Connect4Board,
    debug: {
      collapseOnLoad: true,
      hideToggleButton: true
    },
  });

  return (    
    <div className="row topspace">
      <Connect4Client/>
    </div>
  );
}