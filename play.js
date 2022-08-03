const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf-8');

const { connect } = require('./client');

const conn = connect();

stdin.on('data', key => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // Move right
  if (key === 'd') {
    console.log('d: pressed');
    conn.write('Move: right');
  }
  // Move up
  if (key === 'w') {
    console.log('d: pressed');
    conn.write('Move: up');
  }
  // Move left
  if (key === 'a') {
    console.log('d: pressed');
    conn.write('Move: left');
  }
  // Move down
  if (key === 's') {
    console.log('d: pressed');
    conn.write('Move: down');
  }
});