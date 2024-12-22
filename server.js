const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 10) {
      clearInterval(interval);
      res.writeHead(200);
      res.end('OK');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});