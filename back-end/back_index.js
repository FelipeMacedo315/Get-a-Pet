require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const createPetRouter = require("./routes/petsRoutes.js/createRoute");
const updatePetRoute = require("./routes/petsRoutes.js/updatePetRoute");
const petsModel = require("./models/pets");
const myPetsAdoptionRoute = require("./routes/petsRoutes.js/myPetsAdoptionRoute");
const deletePetRoute = require("./routes/petsRoutes.js/deletePetRoute");
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
