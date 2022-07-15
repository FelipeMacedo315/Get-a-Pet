const express = require("express");
const checkAuth = require("../controllers/user/checkToken");
const createUser = require("../controllers/user/createUser");
const token = require("../controllers/user/token");
const updateinfo = require("../controllers/user/updateInfo");
const userRoutes = express.Router();

userRoutes.post("/register/data",createUser.dataUserRegister);
userRoutes.patch("/updateUser", checkAuth, updateinfo);
module.exports = userRoutes;
