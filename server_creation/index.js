const http = require("http");
const fs = require('fs');
const port = process.env.port || 3000

const myserver = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} served successfully.\n`
    fs.appendFile("analysis.txt",log, (err)=> {
        switch (req.url) {
            case "/home":
                res.end("This is Home");
                break;
            case "/about":
                res.end("This is About");
                break;
            case "/contact":
                res.end("This is Contact us");
                break;

            default:
                res.end("404 not found");
                break;
        }
    });
    console.log("Your server is created successfully");
})

// http.get("/home",(req,res)=>{
   
// })
// http.get("/about",(req,res)=>{
//    res.send("This is About page");
// })

// http.get("/contact",(req,res)=>{
//    res.send("This is Contact page");
// })

myserver.listen(port,
    () => {
        console.log("server listing on ",port);
    }
)


