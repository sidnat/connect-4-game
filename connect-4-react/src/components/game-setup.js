import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Stack, Container, Row , Col  } from "react-bootstrap";
import './game-setup.css'

export default function GameSetup() {
  return (
    <div className="flexcontainer">
    <div className="gameSetup topspace">
      
      <Stack>
        <Container>


        <Form className="customGameBoard formLeft">
          
          <Row>
            <Col md={6}>
          <h3>Board width? (between 5 and 12) </h3>
          <Form.Group className="gameSizeX">
            <Form.Control
              size="sm"
              placeholder="7"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('gameSizeX', e.target.value)}
            />
          </Form.Group>
          
          <br></br>
          <h3>Board Height? (between 5 and 12)</h3>
          <Form.Group className="gameSizeY">
            <Form.Control
              size="sm"
              placeholder="6"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('gameSizeY', e.target.value)}
            />
          </Form.Group>
          <br></br>
         
          <div className="defaultBoardSize">
          <br></br>
            </div>
            <h3>Connect "X" win condition (Connect 5, 6, 9!?)</h3>
          <Form.Group className="connectCondition">
            <Form.Control
              size="sm"
              placeholder="4"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('winCondition', e.target.value)}
            />
          </Form.Group>
            </Col>
           
          <br></br>
          <br></br>

          <Col md={5}>
          <h3>Player 1's name:</h3>
          <Form.Group className="playerOne">             <Form.Control
              size="sm"
              placeholder="Name of player 1"
              className="d-inline-block"
              style={{ width: "200px" }}
              onChange={(e) => localStorage.setItem('playerOne', e.target.value)}
            />
          </Form.Group>
         <br></br>
          <h3>Player 2's name:</h3>
          <Form.Group className="playerTwo">
            <Form.Control
              size="sm"
              placeholder="Name of player 2"
              className="d-inline-block"
              style={{ width: "200px" }}
              onChange={(e) => localStorage.setItem('playerTwo', e.target.value)}
            />
          </Form.Group>
          {/* <br></br>
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
          <br></br>
          <h5>Board Height? (between 5 and 12)</h5>
          <Form.Group className="gameSizeY">
            <Form.Control
              size="sm"
              placeholder="6"
              className="d-inline-block"
              style={{ width: "150px" }}
              onChange={(e) => localStorage.setItem('gameSizeY', e.target.value)}
            />
          </Form.Group> */}
          <br></br>
          {/* <h5>Click to set default board size</h5>
          <div className="defaultBoardSize">
            <Button variant="success" className="d-inline-block" type="submit" onClick={() => {
              localStorage.setItem('gameSizeX', 7);
              localStorage.setItem('gameSizeY', 6);
            }}>
              Default Board Size 6x7
            </Button>
          </div> */}

          

          <br></br>
          <div className="defaultBoardSize">
            <Button variant="success" className="d-inline-block mx-2" type="submit" href="/game/" >Start Game</Button>
          </div>
          </Col>
          </Row>
          
        </Form>
        </Container>
      </Stack>
      
      </div>
    </div>
    
  
  );
}
