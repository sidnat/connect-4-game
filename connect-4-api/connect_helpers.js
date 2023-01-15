import pg from "pg";
import * as dotenv from 'dotenv';

dotenv.config();

const Pool = pg.Pool;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// const email = 'sid@gmail.com'

export const loginValidation = (email, password) => {
  return new Promise(function(resolve, reject) {
    pool.query(`SELECT id, name, email, password, wins FROM players WHERE email = '${email}'`, (error, results) => {
      let userObject = false;
      if (error) {
        reject(error);
      }

      if (password === results.rows[0]?.password) {
        userObject = {
          id: results.rows[0].id,
          name: results.rows[0].name,
          email: results.rows[0].email,
          wins: results.rows[0].wins
        }
        resolve(userObject)
      } else {
        reject('invalid credentials')
      }
    });
  });
}

export const getLeaderboardTopFive = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT id, name, wins FROM players ORDER BY wins DESC LIMIT 5', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

export const getPlayerByID = (playerID) => {
  return new Promise(function(resolve, reject) {
    // might have to add ';' after ${playerID}
    pool.query(`SELECT name, email, wins FROM players WHERE id = ${playerID}`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

export const getGameByID = (gameID) => {
  return new Promise(function(resolve, reject) {
    //logic to retrieve a game using game id and maybe player id
    // add game link to db and then pull to display on users profile page, check if winner is present and don't display finished games
    // might have to add ';' after ${gameID}
    pool.query(`SELECT * FROM games WHERE id = ${gameID}`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

export const addGame = (game) => {
  return new Promise(function(resolve, reject) {
    const values = [
      game.board_size_x,
      game.board_size_y,
      game.player_1,
      game.player_2,
      game.player_1_piece_colour,
      game.player_2_piece_colour,
      game.player_1_board_colour,
      game.player_2_board_colour,
      game.current_turn,
      game.winner
    ];

    pool.query('INSERT INTO games (board_size_x, board_size_y, player_1, player_2, player_1_piece_colour, player_2_piece_colour, player_1_board_colour, player_2_board_colour, current_turn, winner) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', values, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A new game has been added: ${JSON.stringify(results.rows[0])}`);
    });
  });
};

export const addPlayerWin = (playerID) => {
  return new Promise(function(resolve, reject) {
    const values = [playerID];

    pool.query('UPDATE players SET wins = wins + 1 WHERE id = ($1) RETURNING *', values, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A win has been added: ${JSON.stringify(results.rows[0])}`);
    });
  });
};

export const setGameWinner = (playerID) => {
  return new Promise(function(resolve, reject) {
    const values = [playerID];

    pool.query('INSERT INTO games (winner) VALUES ($1) RETURNING *', values, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A game winner has been added: ${JSON.stringify(results.rows[0])}`);
    });
  });
};

export const setPieces = (piece) => {
  return new Promise(function(resolve, reject) {
    const values = [
      piece.player_id,
      piece.piece_colour,
      piece.board_colour
    ];

    pool.query('INSERT INTO pieces (player_id, piece_colour, board_colour) VALUES ($1, $2, $3) RETURNING *', values, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A pieces table (piece/board colour) has been added: ${JSON.stringify(results.rows[0])}`);
    });
  });
};

export const getPiecesByPlayerID = (playerID) => {
  return new Promise(function(resolve, reject) {
    //logic to retrieve a custom pieces colours using player id
    // might have to add ';' after ${playerID}
    pool.query(`SELECT * FROM pieces WHERE id = ${playerID}`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

// delete logic
// const deleteMerchant = (merchantId) => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(merchantId)

//     pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Merchant deleted with ID: ${id}`)
//     })
//   })
// }