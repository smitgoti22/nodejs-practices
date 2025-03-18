const express = require('express');
const app = express();
const port = process.port || 8000
const {connectionMongoDB} = require('./connection.js')
const userRouter = require("./routes/user.js")

/// connection 
connectionMongoDB("mongodb://127.0.0.1:27017/user_management");

/// Middle ware
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(
        "server listening on " + port
    );
});



