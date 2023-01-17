import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Stack } from "react-bootstrap";
import './game-setup.css';

export default function GameSetup() {
  return (
    <div className="gameSetup topspace">
      <Stack>
        <div className="wordwrap">
        <h3>Welcome to Connect 4!</h3>
        <h3>
        For custom board size amd win conditions, please enter below.</h3><h3>Otherwise enjoy the game with default settings!</h3>
        </div>
        <Form className="customGameBoard">
          <h5>Player 1's name:</h5>
          <Form.Group className="playerOne">
            <Form.Control
              size="sm"
              placeholder="name of player 1"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('playerOne', e.target.value)}
            />
          </Form.Group>
          <h5>Player 2's name:</h5>
          <Form.Group className="playerTwo">
            <Form.Control
              size="sm"
              placeholder="name of player 2"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('playerTwo', e.target.value)}
            />
          </Form.Group>
          <h5>Board width? (between 5 and 12)</h5>
          <Form.Group className="gameSizeX">
            <Form.Control
              size="sm"
              placeholder="7"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('gameSizeX', e.target.value)}
            />
          </Form.Group>
          <h5>Board Height? (between 5 and 12)</h5>
          <Form.Group className="gameSizeY">
            <Form.Control
              size="sm"
              placeholder="6"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('gameSizeY', e.target.value)}
            />
          </Form.Group>
          {/* <h5>Click to set default board size</h5>
          <div className="defaultBoardSize">
            <Button variant="success" className="d-inline-block" type="submit" onClick={() => {
              localStorage.setItem('gameSizeX', 7);
              localStorage.setItem('gameSizeY', 6);
            }}>
              Default Board Size 6x7
            </Button>
          </div> */}

          <h5>Connect "X" win condition (Connect 5, 6, 9!?)</h5>
          <Form.Group className="connectCondition">
            <Form.Control
              size="sm"
              placeholder="4"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('winCondition', e.target.value)}
            />
          </Form.Group>
          <div className="defaultBoardSize">
            <Button variant="success" className="d-inline-block" type="submit" href="/game/" >Start Game</Button>
          </div>
        </Form>
      </Stack>
    </div>
  );
}
