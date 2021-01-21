const express = require('express')
const connection = require('./database/conection')

const UserController = require('./controllers/userController')
const loginController = require('./controllers/loginController')

const routes = express.Router()

routes.get('/login/:username/:password', loginController.login)
routes.get('/user/:id_user', UserController.oneUser)

module.exports = routes;