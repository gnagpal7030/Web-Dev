import http from "http";

let server = http.createServer((req, res) => {});

server.listen(3000, () => {
  console.log("I am listening ");
});
