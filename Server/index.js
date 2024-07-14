const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    //console.log("New Request");
    //console.log(req.headers);
    //res.end("Hello from server");

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        //res.end("Hello from server");
        switch (req.url) {
            case "/":
                res.end("Hello from server");
                break;
            case "/about":
                res.end("About from server");
                break;
            case "/contact":
                res.end("Contact from server");
                break;
            default:
                res.end("404 from server");
                break;
        }
    })
    
});

myServer.listen(8000, () => {
    console.log("Server is listening on port 8000");
})