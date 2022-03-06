const { response } = require("express");

const express = require("express");
const app = express();

//static -  html,jpeg,css
app.use(express.static("public"));

// buildin middleware which will transform for all of my routes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/home", (req, res) => {
  response.sendFile(__dirname + "/index.html");
});

// frontend                             aws server in norway
// client   -> (makes a request) ->     server
app.get("/youtube/:username", (req, res) => {
  let username = req.params.username;

  // server   -> (respond with data) ->   client
  // let data = grabInfoAboutUser(username)
  // response.send(data)
  res.send("hello " + username);
});

// multiplication
app.post("/operation", (req, res) => {
  let num2 = parseInt(req.body.num2);
  let num1 = parseInt(req.body.num1);
  let multi = num1 * num2;

  res.send(multi.toString());
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
