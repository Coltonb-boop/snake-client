const net = require('net');

// establishes connection with game server
const connect = () => {
  console.log('Connecting...');
  const conn = net.createConnection({
    host: '172.31.40.113',
    port: 50541
  });

  // interpret incoming data
  conn.setEncoding('utf8');

  conn.on('connect', (message) => {
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