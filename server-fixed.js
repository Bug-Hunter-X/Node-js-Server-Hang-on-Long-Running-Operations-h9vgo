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
  // Add a timeout to prevent the server from hanging indefinitely
  setTimeout(() => {
    if (count < 10) {
      clearInterval(interval);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Timeout');
    }
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});