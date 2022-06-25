const express = require("express");
const path = require("path");
const updatePet = require("../../controllers/pets/updatePet");
const multer = require("multer");
const checkAuth = require("../../controllers/user/checkToken");
const updatePetRoute = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "../../imagenspet"),
    filename: (req, file, cb) => {
      cb(null, Math.random().toString() + file.originalname);
    },
  }),
});

updatePetRoute.patch(
  "/updatePet",
  upload.array("fotopet"),
  checkAuth,
  updatePet
);

module.exports = updatePetRoute;
