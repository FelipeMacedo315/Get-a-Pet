const express = require("express");
const checkAuth = require("../controllers/auth");
const { login, loginForm } = require("../controllers/login");
const updateinfo = require("../controllers/updateInfo");
const loginRoutes = express.Router();

loginRoutes.post("/login", login);

loginRoutes.get("/login/form", loginForm);

loginRoutes.patch("/update/:emailUser", checkAuth, updateinfo);

module.exports = loginRoutes;
