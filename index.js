// const cowsay = require("cowsay");

// console.log(cowsay.say({text: "Nodejs, let's mooooh this!"}));

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch(req.url){
        case "/signup":
            res.end("This is the signup page!");
            break;

        default:
            res.end("Hello World");
    }
    // console.log(req.ulr); // naar welk adres wordt gesurft
//   res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});