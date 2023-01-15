import { Server, Origins } from 'boardgame.io/dist/cjs/server.js';
import { Connect4 } from './game.js';
import { PostgresStore } from 'bgio-postgres';
import * as dotenv from 'dotenv';
import { koaBody } from 'koa-body';

import { getLeaderboardTopFive, addGame, getPlayerByID, loginValidation } from './connect_helpers.js';

dotenv.config();

const dbconfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

console.log('tttttt', dbconfig);
const db = new PostgresStore(dbconfig);

const server = Server({
  // Provide the definitions for your game(s).
  games: [Connect4],

  // Provide the database storage class to use.
  db,

  origins: [
    // Allow your game site to connect.
    'http://localhost:3002',
    // Allow localhost to connect, except when NODE_ENV is 'production'.
    Origins.LOCALHOST
  ],
});

server.router.get('/leaderboard', koaBody(), async (ctx, next) => {
  try {
    const response = await getLeaderboardTopFive();
    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Could not get leaderboard';
  }
});

server.router.get('/player/:id', koaBody(), async (ctx, next) => {
  try {
    const response = await getPlayerByID(ctx.request.params.id)
    ctx.status = 200
    ctx.body = response;
  } catch(err) {
    ctx.status = 500;
    ctx.body = 'Could not get player';
  }
});

// server.router.post('/addnewgame', (ctx, next) => {
// });

server.router.post('/login', koaBody(), async (ctx, next) => {
  const { email, password } = ctx.request.body;

  try {
    const response = await loginValidation(email, password);
    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Could not login';
  }
});

const lobbyConfig = {
  apiPort: 3003,
  apiCallback: () => console.log('Running Lobby API on port 3003...'),
};

server.run({ port: 3010, lobbyConfig }, () => console.log("server running on port 3010..."));