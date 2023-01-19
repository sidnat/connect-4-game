import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Stack, Container, Row, Col } from "react-bootstrap";
import './game-setup.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

export default function GameSetup(props) {
  const { playerInfo } = props;
  let playerData = null;

  // renders page based on logged in status
  if (playerInfo.length !== 0) {
    playerData = props.playerInfo[0];

    // sets game logic to default Connect 4
    localStorage.setItem('playerOne', playerData.name);
    localStorage.setItem('playerTwo', '2');
    localStorage.setItem('gameSizeX', 7);
    localStorage.setItem('gameSizeY', 6);
    localStorage.setItem('winCondition', 4);

    return (
      <div className="flexcontainer">
        <div className="gameSetup topspace">
          <Stack>
            <Container>
              <div className="wordwrap">
                <h1>Welcome to Connect X!</h1>
                <h3>To play standard Connect 4, press 'Start Game'</h3>
                <h3>For custom board size/win conditions, enter values.</h3>
              </div>
              <br></br>
              <Form className="customGameBoard formLeft">
                <Row>
                  <Col md={6}>
                    <h5>Board width? (5 - 16) </h5>
                    <Form.Group className="gameSizeX">
                      <Form.Control
                        size="sm"
                        placeholder="7"
                        className="d-inline-block"
                        style={{ width: "150px" }}
                        onChange={(e) => {
                          let gameSizeX = e.target.value;

                          // extraneous value limitation
                          if (gameSizeX < 5) {
                            gameSizeX = 5;
                          }
                          if (gameSizeX > 16) {
                            gameSizeX = 16;
                          }

                          localStorage.setItem('gameSizeX', gameSizeX);
                        }}
                      />
                    </Form.Group>
                    <br></br>
                    <h5>Board Height? (5 - 12)</h5>
                    <Form.Group className="gameSizeY">
                      <Form.Control
                        size="sm"
                        placeholder="6"
                        className="d-inline-block"
                        style={{ width: "150px" }}
                        onChange={(e) => {
                          let gameSizeY = e.target.value;

                          // extraneous value limitation
                          if (gameSizeY < 5) {
                            gameSizeY = 5;
                          }
                          if (gameSizeY > 12) {
                            gameSizeY = 12;
                          }

                          localStorage.setItem('gameSizeY', gameSizeY);
                        }}
                      />
                    </Form.Group>
                    <br></br>
                    <div className="defaultBoardSize">
                    </div>
                    <h5>*Connect "X" win condition* (4 - 11)</h5>
                    <Form.Group className="connectCondition">
                      <Form.Control
                        size="sm"
                        placeholder="4"
                        className="d-inline-block"
                        style={{ width: "150px" }}
                        onChange={(e) => {
                          let winCondition = e.target.value;

                          // extraneous value limitation, if user enters 99, set default win condition
                          if (winCondition < 4) {
                            winCondition = 4;
                          }
                          if (winCondition > 11) {
                            winCondition = 11;
                          }

                          localStorage.setItem('winCondition', winCondition);
                        }}
                      />
                    </Form.Group>
                    <br></br>
                    <div className="wordwrap">
                      <h6>*Disclaimer: ConnectX win condition</h6>
                      <h6>must be less than board width or height</h6>
                      <h6>by 1, whichever is smaller.</h6>
                    </div>
                  </Col>
                  <br></br>
                  <br></br>
                  <Col md={5}>
                    <h5>Player 1's name:</h5>
                    <Form.Group className="playerOne">
                      <Form.Control
                        size="sm"
                        placeholder={playerData.name}
                        className="d-inline-block"
                        style={{ width: "200px" }}
                        onChange={(e) => localStorage.setItem('playerOne', e.target.value)}
                      />
                    </Form.Group>
                    <br></br>
                    <h5>Player 2's name:</h5>
                    <Form.Group className="playerTwo">
                      <Form.Control
                        size="sm"
                        placeholder="Default Name: 2"
                        className="d-inline-block"
                        style={{ width: "200px" }}
                        onChange={(e) => localStorage.setItem('playerTwo', e.target.value)}
                      />
                    </Form.Group>
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
  } else {
    return (
      <section style={{ backgroundColor: "#eee", height: "100vh" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Game Setup</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <p className="text-muted mb-1"><strong>Please Login or Create User Profile</strong></p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}
