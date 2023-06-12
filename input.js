const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  const stdout = process.stdout;
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    stdout.write('Exited game! 🐍\n');
    process.exit();
  }
};

module.exports = setupInput;