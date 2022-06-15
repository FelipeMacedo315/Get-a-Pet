const express = require("express");
const deletePet = require("../../controllers/pets/deletePet");
const deletePetRoute = express.Router();

deletePetRoute.delete("/deletePet", deletePet);

module.exports = deletePetRoute