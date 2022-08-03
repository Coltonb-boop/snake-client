let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  console.log(key);
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // Move right
  if (key === 'd') {
    console.log('d: pressed');
    connection.write('Move: right');
  }
  // Move up
  if (key === 'w') {
    console.log('w: pressed');
    connection.write('Move: up');
  }
  // Move left
  if (key === 'a') {
    console.log('a: pressed');
    connection.write('Move: left');
  }
  // Move down
  if (key === 's') {
    console.log('s: pressed');
    connection.write('Move: down');
  }
  // Canned message
  if (key === 'z') {
    console.log('z: pressed');
    connection.write('Say: Life is beautiful');
  }
};

module.exports = {
  setupInput
};