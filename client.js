const net = require('net');

// establishes connection with game server
const connect = () => {
  console.log('Connecting...');
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to the server');
    conn.write('Name: CB');
  });

  conn.on('data', (data) => {
    console.log('server says: ', data);
  });

  return conn;
};


module.exports = {
  connect
};