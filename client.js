const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  conn.on('connect', () => {
    console.log('Connected successfully! 😃');
    conn.write("Name: SNK");

    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);

    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 500);

    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 500);

    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 500);

  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;