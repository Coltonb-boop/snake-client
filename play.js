const net = require('net');

// establishes connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: '172.31.40.113',
    port: 50541
  });

  // interpret incoming data
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting...');
connect();

conn.on('connect', () => {

});