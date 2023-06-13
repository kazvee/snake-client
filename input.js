const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;

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

  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }

  if (key === '\u0003') {
    stdout.write('Exited game! 🐍\n');
    process.exit();
  }

};

module.exports = setupInput;