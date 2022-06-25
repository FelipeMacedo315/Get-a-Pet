const express = require("express");
const checkAuth = require("../controllers/user/checkToken");
const { login, loginForm } = require("../controllers/user/login");
const updateinfo = require("../controllers/user/updateInfo");
const loginRoutes = express.Router();

loginRoutes.post("/login", login);
loginRoutes.get("/login/form", loginForm);

module.exports = loginRoutes;
