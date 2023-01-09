DROP TABLE IF EXISTS games CASCADE;

CREATE TABLE games (
  id SERIAL PRIMARY KEY NOT NULL,
  board_size_x INTEGER NOT NULL,
  board_size_y INTEGER NOT NULL,
  player_1 INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  player_2 INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  player_1_piece_colour VARCHAR(255) NOT NULL,
  player_2_piece_colour VARCHAR(255) NOT NULL,
  player_1_board_colour VARCHAR(255) NOT NULL,
  player_2_board_colour VARCHAR(255) NOT NULL,
  current_turn INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  winner INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE
);

-- player pieces and board colour stored here allows players to have different colours on a per game basis
-- if we can't get boardgame.io to work 2d array to map game state 