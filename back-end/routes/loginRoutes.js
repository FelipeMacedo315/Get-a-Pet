const express = require('express')
const { login, loginForm } = require('../controllers/login')
const updateinfo = require('../controllers/updateInfo')
const loginRoutes = express.Router()

loginRoutes.post('/login',login)

loginRoutes.get('/login/form',loginForm)

loginRoutes.get('/update',updateinfo)

module.exports = loginRoutes

