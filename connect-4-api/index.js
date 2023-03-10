import express from 'express';
import bodyParser from 'body-parser';
import {
  getLeaderboardTopFive,
  addGame,
  setPieces,
  getPlayerByID,
  getGameByID,
  getPiecesByPlayerID,
  setGameWinner,
  addPlayerWin,
  loginValidation
} from './connect_helpers.js';

const app = express();
const port = 3003;

app.use(express.json());
app.use(bodyParser.json())
app.use(function(req, res, next) {
  // change localhost:3002 to 3000 if you don't have vagrant vm
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

var jsonParser = bodyParser.json()

// get logic
app.get('/leaderboard', (req, res) => {
  getLeaderboardTopFive()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/player/:id', (req, res) => {
  getPlayerByID(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// post logic
app.post('/addnewgame', (req, res) => {
  addGame(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});
 
app.post('/login', jsonParser, async (req, res) => {
  loginValidation(req.body.email, req.body.password)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/addWin/', jsonParser, async (req, res) => {
  addPlayerWin(req.body.userID)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// delete logic
// app.delete('/merchants/:id', (req, res) => {
//   deleteMerchant(req.params.id)
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     });
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});