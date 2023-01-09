import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import useVisualMode from './hooks/useVisualMode';
import React from 'react';
import LandingPage from './components/landing-page';
import GamePage from './components/game-page';
import ProfilePage from './components/profile-page';
import LeaderboardPage from './components/leaderboard-page';
import { useApplicationData } from './hooks/useApplicationData';

function App() {
  const {transition, mode} = useVisualMode('LANDING_PAGE');

  const {
    state
  } = useApplicationData();

  console.log("is this the state?", state)


  return (
    <Stack>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" onClick={() => transition('LANDING_PAGE')}>Connect 4</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#game">New game</Nav.Link>
          <Nav.Link href="#profile" onClick={() => transition('PROFILE_PAGE')}>Profile page</Nav.Link>
          <Nav.Link href="#leaderboard" onClick={() => transition('LEADERBOARD_PAGE')}>Leaderboard</Nav.Link>
        </Nav>
          <Navbar.Text>
            Signed in as: <a href="#logout">Connect User</a>
          </Navbar.Text>
      </Container>
    </Navbar>
      {mode === "LANDING_PAGE" && <LandingPage />}
      {mode === "GAME_PAGE" && <GamePage />}
      {mode === "PROFILE_PAGE" && <ProfilePage />}
      {mode === "LEADERBOARD_PAGE" && <LeaderboardPage players={state} />}
    </Stack>
  );
}

export default App;