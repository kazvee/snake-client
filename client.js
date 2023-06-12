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
  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;