/*const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
  //console.log("New Request");
  //console.log(req.headers);
  //res.end("Hello from server");
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    //res.end("Hello from server");
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello from server");
        break;
      case "/about":
        const username = myUrl.query.username;
        res.end(`Hi, ${username} from server`);
        break;
      case "/contact":
        const contact = myUrl.query.contact;
        res.end(`Hello, ${contact} from server`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Hello, ${search} from server`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") {
          // db query
          res.end("success");
        }
      default:
        res.end("404 from server");
        break;
    }
  });
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

// Http get - when u want to get some data from the server
// http post - when u want to send and mutate some data in server
*/




// express 
//const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from home page");
});

app.get("/about", (req, res) => {
    return res.send("Hello from about page");
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

// const myServer = http.createServer(app);
// myServer.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// })


/*
   version 

    "express": "^4.19.2",

    1st part -> 4
    2nd part -> 19
    3rd part -> 2

    3rd part (last part) -> Minor fixes(optional)
    latest -> 4.19.4

    2nd part -> recommended bug fixes(security fix)
    latest -> 4.20.0

    1st part -> major release/breaking update
    latest -> 5.0.0

   * now let see ^4.19.2 means that it is automatically update last and middle part whenever there is an update. but it never change the first part(means major release)
   * ~4.19.2 means that it is automatically update only 3rd part whenever there is an update.
       for eg . 4.19.3
                4.19.4
            
*/