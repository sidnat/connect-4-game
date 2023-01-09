import axios from "axios";
import { useState ,useEffect } from 'react';

export function useApplicationData () {
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    const leaderboardURL = `http://localhost:3003/leaderboard`;
  
    axios.get(leaderboardURL).then(res => {
      setData(res.data)
    })
  }, []);

  return { state: data };
}
