let port = 6969;
let http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>hi you are in the defalut directory</h1>");
  } else if (req.url === "/profile") {
    res.end("<h1>hi i will be 19 years old this march-6-2022");
  } else {
    res.statusCode = 404;
    res.end("<h1>UNAUTHORIZED ACCESS</h1>");
  }

  //   res.end("<h1>this is from sudais</h1>");
});

server.listen(port, () => {
  console.log(`sever running on port ${port}`);
});
