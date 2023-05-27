const express = require("express");

const user_route = express();

const user_controller = require("../controllers/userController");

user_route.post("/register", user_controller.registerUser);

user_route.post("/login",user_controller.user_login)
module.exports = user_route;
