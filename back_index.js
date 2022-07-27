require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conn = require("./back-end/db/conn");
const userRoutes = require("./back-end/routes/userRoutes");
const loginRoutes = require("./back-end/routes/loginRoutes");
const createPetRouter = require("./back-end/routes/petsRoutes.js/createRoute");
const updatePetRoute = require("./back-end/routes/petsRoutes.js/updatePetRoute");
const petsModel = require("./back-end/models/pets");
const myPetsAdoptionRoute = require("./back-end/routes/petsRoutes.js/myPetsAdoptionRoute");
const deletePetRoute = require("./back-end/routes/petsRoutes.js/deletePetRoute");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);
app.use(createPetRouter);
app.use(updatePetRoute);
app.use(myPetsAdoptionRoute);
app.use(deletePetRoute);

app.get("/", (req, res) => {
  petsModel
    .find()
    .sort("-createdAt")
    .then((data) => {
      res.status(200).json({ allPets: data });
    });
});

app.listen(port, console.log("SERVER IS RUN IN PORTA: " + port));
