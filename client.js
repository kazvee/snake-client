const net = require('net');
const { IP, PORT, PLAYER_NAME } = require('./constants');

// Establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Runs when the connection is first established
  conn.on('connect', () => {
    // No longer required, welcome message is sent from server side
    // Display message to player that they are now connected to the game server
    // console.log('Connected successfully! 😃');

    // Send the player name to the server
    conn.write(PLAYER_NAME);
  });

  // When data received from server, display it on player console
  conn.on('data', (data) => {
    console.log(data.trim());
  });

  // Interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;