import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamePage from './components/game-page';
import { Form, Button, Link, Stack } from "react-bootstrap";
import { Router, Route, Routes } from 'react-router-dom';

export default function GameSetup() {
  const [player1, setPlayer1] = useState("0");
  const [player2, setPlayer2] = useState("1");
  const [gameSizeX, setGameSizeX] = useState(7)
  const [gameSizeY, setGameSizeY] = useState(7)

      // form to player 1
      // form to player 2
      // game size default(6*7) button
      // game size x field
      // game size y field
      // start game button (pass above props)

  return (
    <div>
      <Stack>
      <Router>

      <Form className="customGameBoard">
        <h1>Please enter your custom x axis value between 5 and 12 </h1>
        <Form.Group className="gameSizeX">
          <Form.Control
            size="sm"
            placeholder="board width"
            className="d-inline-block"
            style={{ width: "150px" }}
            onChange={(e) => setGameSizeX(e.target.value)}
          />
        </Form.Group>
        <h1>Please enter your custom y axis value between 5 and 12 </h1>
        <Form.Group className="gameSizeY">
          <Form.Control
            size="sm"
            placeholder="board height"
            className="d-inline-block"
            style={{ width: "150px" }}
            onChange={(e) => setGameSizeY(e.target.value)}
          />
        </Form.Group>

        <div className="defaultBoardSize">
          <Button variant="success" className="d-inline-block" type="submit" onSubmit={() => {
            setGameSizeX(7)
            setGameSizeY(6)
          }}>
            Default Board Size 6x7
          </Button>
        </div>
      </Form>

      <Link className="text-white mx-2 d-inline-block" href="/game/">
        Start Game
      </Link>

      <Routes>
        <Route path="/game" element={<GamePage gameSizeX={gameSizeX} gameSizeY={gameSizeY} />}></Route>
      </Routes>
      </Router>

</Stack>
    </div>
  );
}
