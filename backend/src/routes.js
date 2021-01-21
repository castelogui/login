const express = require('express')
const connection = require('./database/conection')

const UserController = require('./controllers/userController')

const routes = express.Router()

routes.get('/user/:id_user', UserController.oneUser)

module.exports = routes;