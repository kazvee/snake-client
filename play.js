const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.setEncoding('utf8');
  return conn;
};
console.log('Connecting to game server... 🐍');
connect();