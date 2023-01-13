import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import useVisualMode from './hooks/useVisualMode';
import LandingPage from './components/landing-page';
import GamePage from './components/game-page';
import ProfilePage from './components/profile-page';
import LeaderboardPage from './components/leaderboard-page';
import { useApplicationData } from './hooks/useApplicationData';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const { transition, mode } = useVisualMode('LANDING_PAGE');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    players
  } = useApplicationData();

  return (
    <Stack>
      <Navbar bg="primary" variant="dark">
        <Container>
          <div className="c4image">
            <Navbar.Brand href="#home" className="navimage" onClick={() => transition('LANDING_PAGE')}><img src="/images/connect4logo51px.png" alt="logo" class="img-responsive" /></Navbar.Brand>
          </div>
          <Nav className="ml-auto">
            <Nav.Link href="#game" className="text-white " onClick={() => transition('GAME_PAGE')}>New game</Nav.Link>
            <Nav.Link href="#profile" className="text-white " onClick={() => transition('PROFILE_PAGE')}>Profile page</Nav.Link>
            <Nav.Link href="#leaderboard" className="text-white" onClick={() => transition('LEADERBOARD_PAGE')}>Leaderboard</Nav.Link>
          </Nav>
          {/* <Navbar.Text>
            Signed in as: <a href="#logout">Connect User</a>
          </Navbar.Text> */}
          {!isLoggedIn &&
            <Form>
              <Form.Group className="mb-3 d-inline-block" controlId="formBasicEmail">
                <Form.Control size="sm" type="email" placeholder="Enter email" className="d-inline-block" style={{ width: '150px' }} />
              </Form.Group>
              <Form.Group className="mb-3 d-inline-block" controlId="formBasicPassword">
                <Form.Control size="sm" type="password" placeholder="Password" className="d-inline-block" style={{ width: '150px' }} />
              </Form.Group>

              <Form.Group className="mb-3 d-inline-block" controlId="formBasicCheckbox">
              </Form.Group>

              <Button size="sm" variant="success" className="d-inline-block" onClick={() => setIsLoggedIn(true)} type="submit">Login</Button>
            </Form>
          }
          {isLoggedIn &&
            <Form>
              <Button variant="warning" className="d-inline-block" onClick={() => setIsLoggedIn(false)} type="submit">Logout</Button>
            </Form>
          }
        </Container>
      </Navbar>
      {mode === "LANDING_PAGE" && <LandingPage />}
      {mode === "GAME_PAGE" && <GamePage />}
      {mode === "PROFILE_PAGE" && <ProfilePage players={players} />}
      {mode === "LEADERBOARD_PAGE" && <LeaderboardPage players={players} />}
    </Stack>
  );
}

export default App;