const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);


// sync -- blocking code
//fs.writeFileSync("./test.txt", "Hello World");

//async -- non-blocking code
//fs.writeFile("./test.txt", "Hello World", (err) => {})


 const result = fs.readFileSync("./contacts.txt", "utf-8")
 console.log(result)


// async does not return anything, and it always expect a callback
 fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
 })


 //fs.appendFileSync("./test.txt", `${Date.now()} Hello World\n`);

 //fs.cpSync("./test.txt", "./copy.txt")

 //fs.unlinkSync("./copy.txt")

 //console.log(fs.statSync("./copy.txt"))

 fs.mkdirSync("my-docs/a/b", {recursive: true});