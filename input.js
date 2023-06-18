const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

let connection;
const stdin = process.stdin;
const stdout = process.stdout;

// Set up input handling
const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);

  // Interpret incoming data as text
  stdin.setEncoding('utf8');

  stdin.resume();
  stdin.on('data', handleUserInput);

  // Handle server ending connection
  connection.on('end', handleServerEnd);

  return stdin;
};

// Handle user input for movement directions
const handleUserInput = (key) => {

  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }

  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }

  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }

  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }

  // Handle user input to send canned messages
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }

  // Exit the game if player presses `Ctrl+C`
  if (key === '\u0003') {
    stdout.write('You exited the game! 🕹️\n');
    process.exit();
  }

};

// Handle server ending connection
const handleServerEnd = () => {
  stdout.write('The server has ended the connection! ⚡\n');
  process.exit();
};

module.exports = setupInput;