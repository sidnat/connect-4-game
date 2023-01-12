import React from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTableHead,
  MDBTableCell,
} from "mdb-react-ui-kit";
import "./leaderboard-page.css";

export default function LeaderboardPage(props) {
  const { players } = props;

  return (
    <div className="leaderboard">
      <section>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Leaderboard</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="leaderboard-container">
          <h1 className="leaderboard-title">Leaderboard</h1>
          <MDBTable
            striped
            bordered
            borderColor="dark"
            style={{ width: "85%", margin: "auto" }}
          >
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <td>
                  <strong>#</strong>
                </td>
                <td>
                  <strong>Name</strong>
                </td>
                <td>
                  <strong>Wins</strong>
                </td>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {players.map((player, index) => (
                <tr key={player.id}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.wins} wins</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </div>
  );
}
