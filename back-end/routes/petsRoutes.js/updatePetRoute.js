const express = require("express");
const path = require("path");
const updatePet = require("../../controllers/pets/updatePet");
const multer = require("multer");
const checkAuth = require("../../controllers/user/checkToken");
const updatePetRoute = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "../../../front-end/src/assets/imagenspet"),
    filename: (req, file, cb) => {
      cb(null,file.originalname);
      console.log(req.files);
    },
  }),
});

updatePetRoute.patch("/updatePet", upload.array("fotopet"), checkAuth, updatePet);

module.exports = updatePetRoute;
