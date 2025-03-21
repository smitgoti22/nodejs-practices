const express = require('express');
const users = require('./user_data.json')
const fs = require('fs');
const { execPath } = require('process');
const { json } = require('stream/consumers');
const app = express();
const port = process.port || 3000

/// Middle ware
app.use(express.urlencoded({ extended: false }))

/// Rest api points - json
app.get('/api/users', (req, res) => {
    return res.send(users);
});

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req, res) => {
    return res.json({ status: "Pending" });
}).delete((req, res) => {
    return res.json({ status: "Pending" });
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    const name = req.body.first_name;
    console.log(body);
    
    const isExistUser = users.some(user => user.first_name === name);

    console.log("isExistUser is >>> " + isExistUser);
    
    if (isExistUser) {
        return res.json({
            status: "failed",
            msg: "User already exists"
        })
    }

    users.push({ ...body, id: users.length });
    fs.writeFile('./user_data.json', JSON.stringify(users), (err, data) => {
        return res.json({
            status: "success",
            "msg": "User created successfully"
        })
    });
})

/// send html to user
app.get('/users', (req, res) => {
    const html = `
    <ul> ${users.map(user => `<li> ${user.first_name}</li>`).join("")} </ul>
    `;
    return res.send(html);
});


app.listen(port, () => {
    console.log(
        "server listening on " + port
    );
});

