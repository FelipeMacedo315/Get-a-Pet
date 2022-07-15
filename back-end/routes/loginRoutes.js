const express = require("express");
const checkAuth = require("../controllers/user/checkToken");
const { login } = require("../controllers/user/login");
const updateinfo = require("../controllers/user/updateInfo");
const loginRoutes = express.Router();

loginRoutes.post("/login", login);

module.exports = loginRoutes;
