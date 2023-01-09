import React from "react";
import { MDBTable, MDBTableBody, MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function LeaderboardPage(props) {
  const players = [
    { id: 1, name: "Alice", wins: 3 },
    { id: 2, name: "Bob", wins: 2 },
    { id: 3, name: "Charlie", wins: 1 },
    { id: 4, name: "Nikki", wins: 1 },
    { id: 5, name: "Bobbi", wins: 0 },
  ];

  const isLoggedIn = false;

  // const { players, isLoggedIn } = props;

  return (
    <div>
      <h1>Leaderboard</h1>

      {!isLoggedIn && (
        <div className="leaderboard-login-form">
          <form>
            <MDBInput label="username" type="text" />
            <MDBInput label="password" type="password" />
            <MDBBtn type="submit">Login</MDBBtn>
          </form>
        </div>
      )}

      <div className="leaderboard-container">
        <MDBTable
          striped
          bordered
          borderColor="primary"
          style={{ width: "50%", margin: "auto", paddingTop: "100px" }}
        >
          <MDBTableBody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.wins} wins</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}
