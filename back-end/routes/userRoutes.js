const express = require("express");
const checkAuth = require("../controllers/user/auth");
const createUser = require("../controllers/user/createUser");
const updateinfo = require("../controllers/user/updateInfo");
const userRoutes = express.Router();

userRoutes.get("/register", createUser.formRegisterUser);
userRoutes.post("/register/data", createUser.dataUserRegister);
userRoutes.patch("/update", checkAuth, updateinfo);
module.exports = userRoutes;
