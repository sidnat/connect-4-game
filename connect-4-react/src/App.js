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
import Transition from './components/Transition';
import { useState } from 'react';
import { useApplicationData } from './hooks/useApplicationData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

// thorough cleaning of syntax, formatting required

function App() {

  const { data, handleSubmit, isLoggedIn, handleLogout } = useApplicationData();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const userName = localStorage.getItem("userName");

  return (
    <Stack>
      <Router>

        <Navbar bg="primary" variant="dark">
          <Container>
            <div className="c4image">
              <Navbar.Brand href="/" className="navimage" ><img src="/images/connect4logo75px.png" alt="logo" className="img-responsive" /></Navbar.Brand>
            </div>
            <div className="navcontainer">
            <nav className="ml-auto">
              <Nav.Link className="text-white mx-2 d-inline-block" href="/game" >Start Game</Nav.Link>
              <Nav.Link className="text-white mx-2 d-inline-block" href="/profile/" >Profile</Nav.Link>
              <Nav.Link className="text-white mx-2 d-inline-block" href="/leaderboard/" >Leaderboard</Nav.Link>
           </nav>
           </div>
        
            {!isLoggedIn &&
              <Form className="login-form" onSubmit={(e) => handleSubmit(e, email, password)}>
                <div className="input-text">
                  <Form.Group className="email-form" controlId="formBasicEmail">
                    <Form.Control size="sm" type="email" placeholder="Enter email" className="d-inline-block" style={{ width: '150px' }} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="password-form" controlId="formBasicPassword">
                    <Form.Control size="sm" type="password" placeholder="Password" className="d-inline-block" style={{ width: '150px'}} onChange={(e) => setpassword(e.target.value)} />
                  </Form.Group>
                </div>
                <div className="login-button">
                  <Button variant="success" className="d-inline-block" type="submit">Login</Button>
                </div>
              </Form>
            }
            {isLoggedIn &&
              <Navbar.Text className="login-form">
              Signed in as: {userName}
                <Button variant="warning" className="logout-button" onClick={() => handleLogout()} type="button">Logout</Button>
              </Navbar.Text>
            }
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/game" element={<GamePage />}></Route>
          <Route path="/profile/" element={<ProfilePage playerInfo={data.playerInfo} />}></Route>
          <Route path="/transition/" element={<Transition />}></Route>
          <Route path="/leaderboard/" element={<LeaderboardPage players={data.leaderboard} />}></Route>
        </Routes>

      </Router>

    </Stack>
  );
}

export default App;