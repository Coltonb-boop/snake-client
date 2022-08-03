const net = require('net');

// establishes connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: '172.31.40.113',
    port: 50541
  });

  // interpret incoming data
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('server says: ', data);
  });

  return conn;
};

console.log('Connecting...');

module.exports = {
  connect
};