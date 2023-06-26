const http = require('http');
const HOST = 'localhost';
const PORT = 3000;
const server = http.createServer((request, response) => {
  response.end("Hello, Galvanize!");
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
