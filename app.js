const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const users = [];

app.get("/users", (req, res) => {
  return res.send(users);
});

app.post("/users", (req, res) => {
    const {name, age} = req.body;

    let user = Object.create(null);
    user.name = name;
    user.age = age;

    users.push(user);

    return res.status(201).json({
        status: "success",
        message: "User addedd successfully"
    })
});

module.exports = app;
