const http = require("http");
const fs = require("fs");
const url = require("url");



const myServer = http.createServer((req, res) => {
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
                if(req.method === "GET") res.end("This is a signup form");
                else if (req.method === "POST"){
                    // db query
                    res.end("success");
                }
            default:
                res.end("404 from server");
                break;
        }
    })
    
});

myServer.listen(8000, () => {
    console.log("Server is listening on port 8000");
})





// Http get - when u want to get some data from the server
// http post - when u want to send and mutate some data in server