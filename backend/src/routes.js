const express = require("express");
const connection = require("./database/conection");

const UserController = require("./controllers/userController");
const loginController = require("./controllers/loginController");

const routes = express.Router();

routes.post("/login", loginController.login);
routes.get("/user/:id_user", UserController.oneUser);
routes.get("/users", UserController.allUsers);

module.exports = routes;