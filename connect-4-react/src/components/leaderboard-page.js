import React from "react";
import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";

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
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

    <div className="leaderboard-container">
      <MDBTable striped>
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
