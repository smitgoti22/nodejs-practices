const User = require("../models/user.js")

async function handleAllUsers (req,res) {
    const users = await User.find({});
    console.log(users);
    return res.json(users);
}

async function getUserById (req,res) {
    const user = await User.findOne({ _id: req.params.id });
    return res.json(user);
}
async function handleUserUpdateById (req,res) {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, { last_name: "changed" });
    return res.json({ status: "Success" });
}
async function handleUserDeleteById (req,res) {
    const user = await User.findByIdAndDelete({ _id: req.params.id })
    return res.json({ status: "User deleted successfully." });
}
async function handleCreateUser(req,res) {
    const body = req.body;
    const name = req.body.first_name;
    console.log(body);

    const isExistUser = users.some(user => user.first_name === name);

    console.log("isExistUser is >>> " + isExistUser);

    if (
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.password
    ) {
        return res.json({
            status: "failed",
            msg: "All fields are required",
        });
    }

    if (isExistUser) {
        return res.json({
            status: "failed",
            msg: "User already exists"
        })
    }

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.password,
    });

    console.log("result is >>> " + result);

    return res.status(201).json({
        msg: "Success",
    });
}

module.exports = {
    handleAllUsers,
    getUserById,
    handleUserUpdateById,
    handleUserDeleteById,
    handleCreateUser
}