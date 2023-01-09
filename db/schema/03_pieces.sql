DROP TABLE IF EXISTS pieces CASCADE;

CREATE TABLE pieces (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  piece_colour VARCHAR(255) NOT NULL UNIQUE,
  board_colour VARCHAR(255) NOT NULL
);

-- maybe change schema to allow them to choose pieces and board colours on a per game basis, so it doesn't affect other games/players