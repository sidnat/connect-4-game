import { React, useState, useMemo, useEffect } from "react";
import { Client } from 'boardgame.io/react';
import { Connect4Board } from './board';
import { Connect4 } from './game';
import './game-page.css';
import { SocketIO } from 'boardgame.io/multiplayer'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { retrieveUser } from "../utils/loginUtils";


export default function GamePage(props) {
  const [ lsUser, setLsUser ] = useLocalStorage('testytest', JSON.stringify(null))
  const { isLoggedIn } = props;
  const location = useLocation()
  const id = location.state?.data.userID
  const [user, setUser] = useState(null)
 
  useEffect(() => {
    setUser(retrieveUser())
  }, [])

  const Connect4Client = Client({
    game: Connect4(id),
    board: Connect4Board,
    multiplayer: SocketIO({ server: 'localhost:3010' }),
  });

  // :matchid
  const { matchid } = useParams()
  
  return user ? (
    <div className="row topspace">
      < Connect4Client matchID={matchid} playerID={id.toString()} isLoggedIn={isLoggedIn}/>
    </div>    
  ) : (
    <div>
      <p>Please log in</p>
    </div>
  )
}