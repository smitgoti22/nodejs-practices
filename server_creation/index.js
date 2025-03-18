const http = require("http");
const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env.port || 3000

app.get('/',(req,res) => {
    return res.send("Welcome to the homepage.");
});
app.get('/about',(req,res) => {
    return res.send("This is about page.");
});

app.listen(port, ()=>{});

/// routing using http package
// const myserver = http.createServer((req, res) => {

//     const log = `${Date.now()}: ${req.url} served successfully.\n`
//     fs.appendFile("analysis.txt",log, (err)=> {
//         switch (req.url) {
//             case "/home":
//                 res.end("This is Home");
//                 break;
//             case "/about":
//                 res.end("This is About");
//                 break;
//             case "/contact":
//                 res.end("This is Contact us");
//                 break;

//             default:
//                 res.end("404 not found");
//                 break;
//         }
//     });
//     console.log("Your server is created successfully");
// })

/// using http package
// http.get("/home",(req,res)=>{
   
// })
// http.get("/about",(req,res)=>{
//    res.send("This is About page");
// })

// http.get("/contact",(req,res)=>{
//    res.send("This is Contact page");
// })

// myserver = http.createServer(app)

// myserver.listen(port,
//     () => {
//         console.log("server listing on ",port);
//     }
// )


