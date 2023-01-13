import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import LandingPage from './components/landing-page';
import GamePage from './components/game-page';
import ProfilePage from './components/profile-page';
import LeaderboardPage from './components/leaderboard-page';
import { useApplicationData } from './hooks/useApplicationData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const {
    players
  } = useApplicationData();

  return (
    <Stack>
      <Router>

        <Navbar bg="primary" variant="dark">
          <Container>
            <div className="c4image">
              <Navbar.Brand href="/" className="navimage" ><img src="/images/connect4logo75px.png" alt="logo" className="img-responsive" /></Navbar.Brand>
            </div>
            <nav className="ml-auto">
              <Nav.Link href="/game" >Connect4</Nav.Link>
              <Nav.Link href="/profile/" >Profile</Nav.Link>
              <Nav.Link href="/leaderboard/" >Leaderboard</Nav.Link>
            </nav>

          </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/game" element={<GamePage/>}></Route>
            <Route path="/profile/" element={<ProfilePage />}></Route>
            <Route path="/leaderboard/" element={<LeaderboardPage players={players} />}></Route>
        </Routes>

      </Router>

    </Stack>
  );
}

export default App;