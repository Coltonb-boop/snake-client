const { connect } = require('./client');
const conn = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
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
    console.log('w: pressed');
    conn.write('Move: up');
  }
  // Move left
  if (key === 'a') {
    console.log('a: pressed');
    conn.write('Move: left');
  }
  // Move down
  if (key === 's') {
    console.log('s: pressed');
    conn.write('Move: down');
  }
};

setupInput();

// stdin.on('data', key => {
  
// });