const net = require('net');
const { IP, PORT, PLAYER_NAME } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('data', (data) => {
    console.log('Server says:', data.trim());
  });
  conn.on('connect', () => {
    console.log('Connected successfully! 😃');
    conn.write(PLAYER_NAME);
  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;