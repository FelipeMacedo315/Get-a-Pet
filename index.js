const express = require("express");
const cors = require("cors");
const conn = require("./back-end/db/conn");
const userRoutes = require("./back-end/routes/userRoutes");
const loginRoutes = require("./back-end/routes/loginRoutes");
const createPetRouter = require("./back-end/routes/petsRoutes.js/createRoute");
const updatePetRoute = require("./back-end/routes/petsRoutes.js/updatePetRoute");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);
app.use(createPetRouter)
app.use(updatePetRoute)
app.use(cors({ credentials: true }));

app.listen(5000, console.log("Server is work"));
