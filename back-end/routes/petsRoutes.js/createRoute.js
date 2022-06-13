const express = require("express");
const createPets = require("../../controllers/pets/createPet");
const checkAuth = require("../../controllers/user/auth");

const createPetRouter = express.Router();

createPetRouter.post("/createPet", checkAuth, createPets);

module.exports = createPetRouter;
