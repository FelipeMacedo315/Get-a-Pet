const express = require("express");
const createUser = require("../controllers/createUser");
const userRoutes = express.Router();

userRoutes.get("/register", createUser.formRegisterUser);
userRoutes.post("/register/data", createUser.dataUserRegister);

module.exports = userRoutes;
