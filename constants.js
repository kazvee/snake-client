const IP = 'localhost';
const PORT = 50541;

const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';


const MESSAGES = {
  '1': 'Say: hello snek frens!',
  '2': 'Say: Baby Snake do do do',
  '3': 'Say: om nom nom so hungry',
};

// Add random numbers to player name, making it easier to test multiple player connections
const PLAYER_NAME = `Name: snek #${Math.floor(Math.random() * 90) + 10}`;

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
  PLAYER_NAME
};