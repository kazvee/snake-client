let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === '1') {
    connection.write("Say: hello snek frens!");
  }

  if (key === '2') {
    connection.write("Say: Baby Snake do do do");
  }

  if (key === '3') {
    connection.write("Say: om nom nom so hungry");
  }

  if (key === '\u0003') {
    stdout.write('Exited game! 🐍\n');
    process.exit();
  }

};

module.exports = setupInput;