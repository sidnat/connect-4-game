import React from "react";
import { MDBTable, MDBTableBody, MDBContainer,MDBRow,MDBCol,MDBBreadcrumb,MDBBreadcrumbItem } from "mdb-react-ui-kit";
import './leaderboard-page.css'


export default function LeaderboardPage(props) {
  const { players } = props;

  console.log("leaderboard page", players)
  return (
    <div className="leaderboard">
    <section style={{ backgroundColor: "#eee" }}>
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
      <h1 className='leaderboard-title'>Leaderboard</h1>
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
    </section>
    </div>

  );
}
