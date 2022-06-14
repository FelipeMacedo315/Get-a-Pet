const express = require("express");
const updatePet = require("../../controllers/pets/updatePet");
const multer = require("multer");
const upload = multer({ dest: "petImagens" });
const updatePetRoute = express.Router();

updatePetRoute.patch("/updatePet", upload.array("fotopet", 8), updatePet);

module.exports = updatePetRoute;
