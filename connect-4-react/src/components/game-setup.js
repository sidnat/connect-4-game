import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamePage from './game-page';
import { Form, Button, Stack } from "react-bootstrap";
import { Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function GameSetup() {
  // const [player1, setPlayer1] = useState("0");
  // const [player2, setPlayer2] = useState("1");
  // const [gameSizeX, setGameSizeX] = useState(7)
  // const [gameSizeY, setGameSizeY] = useState(7)

      // form to player 1
      // form to player 2
      // game size default(6*7) button
      // game size x field
      // game size y field
      // start game button (pass above props)

  return (
    <div>
      <Stack>
      {/* <Router> */}

      <Form className="customGameBoard">
        <h3>Please enter your custom x axis value between 5 and 12 </h3>
        <Form.Group className="gameSizeX">
          <Form.Control
            size="sm"
            placeholder="board width"
            className="d-inline-block"
            style={{ width: "150px" }}
            onChange={(e) => localStorage.setItem('gameSizeX', e.target.value)}
          />
        </Form.Group>
        <h3>Please enter your custom y axis value between 5 and 12 </h3>
        <Form.Group className="gameSizeY">
          <Form.Control
            size="sm"
            placeholder="board height"
            className="d-inline-block"
            style={{ width: "150px" }}
            onChange={(e) => localStorage.setItem('gameSizeY', e.target.value)}
          />
        </Form.Group>
          </Form>

        <div className="defaultBoardSize">
          <Button variant="success" className="d-inline-block" type="submit" onClick={() => {
            localStorage.removeItem('gameSizeX')
            localStorage.removeItem('gameSizeY')
            localStorage.setItem('gameSizeX', 6)
            localStorage.setItem('gameSizeY', 7)
          }}>
            Default Board Size 6x7
          </Button>
        </div>

<Button variant="success" href="/game/" ></Button>
      {/* <Link className="text-black mx-2 d-inline-block" href="/game/">
        Start Game
      </Link> */}

      {/* <Routes>
        <Route path="/game" element={<GamePage />}></Route>
      </Routes> */}
      {/* </Router> */}

</Stack>
    </div>
  );
}
