import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Connect 4</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#game">New game</Nav.Link>
          <Nav.Link href="#user">User page</Nav.Link>
          <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
        </Nav>
        <Navbar.Text>
          Signed in as: <a href="#logout">Connect User</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default App;
