const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('Connected successfully! 😃');
  });
  conn.setEncoding('utf8');
  return conn;
};
console.log('Connecting to game server... 🐍');
connect();
