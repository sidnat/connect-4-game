import React from "react";
import { Client } from 'boardgame.io/react';
import { Connect4Board } from './board';
import { Connect4 } from './game';
import './game-page.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

export default function GamePage(props) {
  const { playerInfo } = props;
  const gameSizeX = localStorage.getItem('gameSizeX');
  const gameSizeY = localStorage.getItem('gameSizeY');
  let winCondition = localStorage.getItem('winCondition');

  // Win condition can't be more than the board width or height, minus one. so you cant have connect 9 on a 5x5 board
  if (winCondition > gameSizeX - 1 || winCondition > gameSizeY - 1) {
    if (gameSizeX === gameSizeY) {
      winCondition = gameSizeX - 1;
      localStorage.setItem('winCondition', winCondition);
    }
    if (gameSizeX < gameSizeY) {
      winCondition = gameSizeX - 1;
      localStorage.setItem('winCondition', winCondition);
    }
    if (gameSizeY < gameSizeX) {
      winCondition = gameSizeY - 1;
      localStorage.setItem('winCondition', winCondition);
    }
  }

  const Connect4Client = Client({
    game: Connect4(gameSizeX, gameSizeY, winCondition),
    board: Connect4Board,
    debug: {
      collapseOnLoad: true,
      hideToggleButton: true
    },
  });

  // renders page based on logged in status
  if (playerInfo.length !== 0) {
    return (
      <div className="row topspace">
        <Connect4Client />
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
                <MDBBreadcrumbItem active>Game</MDBBreadcrumbItem>
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