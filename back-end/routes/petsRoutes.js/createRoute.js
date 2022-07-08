const express = require("express");
const createPets = require("../../controllers/pets/createPet");
const checkAuth = require("../../controllers/user/checkToken");
const multer = require("multer");
const path = require("path");
const createPetRouter = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname + "../../../../front-end/src/assets/imagenspet"),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

createPetRouter.post("/add/pet", upload.array("titleImages"), createPets);

module.exports = createPetRouter;
