// console.log("hiiiii");

/*const chalk = require("chalk");
console.log(chalk.bgBlack.yellow("yoyo"));*/

// console.log("first version");

/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if(req.url === "/message"){
      res.end("Messages");
  } else{
      res.end("Hello World");
  }
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

const express = require('express');
const { Mongoose } = require('mongoose');
const app = express()
const port = 3000
// const spamm = require("./middleware/spamm");
const routerMessages = require("./routers/messages");
const pug = require("pug");

app.set("view engine", pug);

mongoose.connect("mongodb://localhost:27017/demoles", { //url nog aanpassen aan eigen server en mongodb
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    //   res.send('Hello World!');
    res.render("index", {
        message : "Hi welcome to nodejs",
    })
});

app.use("/api/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})