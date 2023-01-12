const db = require('../connection');

export const addGame = (game) => {
  const queryString = `
    INSERT INTO games (board_size_x, board_size_y, player1, player2, current_turn)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    game.board_size_x,
    game.board_size_y,
    game.player1,
    game.player2,
    game.current_turn,
    game.winner
  ];

  return db.query(queryString, values)
    .then((gameObject) => {
      return gameObject.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const setPieces = (piece) => {
  const queryString = `
    INSERT INTO pieces (player_id, piece_colour, board_colour)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [
    piece.player_id,
    piece.piece_colour,
    piece.board_colour
  ];

  return db.query(queryString, values)
    .then((pieceObject) => {
      return pieceObject.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getPlayerByID = (playerID) => {
  //logic to get existing player (will be fake seed) by player ID, for profile page
  return db.query(`SELECT name, email FROM players WHERE id = ${playerID};`)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export const getPlayerByEmail = (playerEmail) => {
  //logic to get existing player (will be fake seed) by player ID, for profile page
  return db.query(`SELECT email FROM players WHERE id = ${playerEmail};`)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export const getGameByID = (gameID) => {
  //logic to retrieve a game using game id and maybe player id
  // add game link to db and then pull to display on users profile page, check if winner is present and don't display finished games
  return db.query(`SELECT * FROM games WHERE id = ${gameID};`)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export const getPiecesByPlayerID = (playerID) => {
  //logic to retrieve a custom pieces colours using player id
  return db.query(`SELECT * FROM pieces WHERE id = ${playerID};`)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export const setGameWinner = (playerID) => {
  //logic to input winner of game in game table and addLeaderboardWin function
  const queryString = `
  INSERT INTO games (winner)
  VALUES ($1)
  RETURNING *;
`;

  const values = [playerID];

  return db.query(queryString, values)
    .then((gameObject) => {
      return gameObject.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const addPlayerWin = (playerID) => {
  const queryString = `
  UPDATE players
  SET wins = wins + 1
  WHERE id = ($1)
  RETURNING *;
`;

  const values = [playerID];

  return db.query(queryString, values)
    .then((leaderboardObject) => {
      return leaderboardObject.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getLeaderboardTopFive = () => {
  const queryString = `
    SELECT name, wins
    FROM players
    ORDER BY wins DESC
    LIMIT 5;
  `;

  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

// if we choose to allow players to be added later on
// const addLeaderboardPlayer = (playerID) => {
//   //logic to add to leaderboard table recording wins for each playerID
//   const queryString = `
//     INSERT INTO leaderboards (player_id, wins)
//     VALUES ($1, $2)
//     RETURNING *;
//   `;

//   const values = [leaderboard.player_id, 0];

//   return db.query(queryString, values)
//     .then((leaderboardObject) => {
//       return leaderboardObject.rows[0];
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

// module.exports = {
//   addGame,
//   setPieces,
//   getPlayerByID,
//   getGameByID,
//   getPiecesByPlayerID,
//   setGameWinner,
//   addLeaderboardWin,
//   getLeaderboardTopFive
// };