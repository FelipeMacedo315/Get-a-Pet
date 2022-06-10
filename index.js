const express = require("express");
const cors = require("cors");
const conn = require("./back-end/db/conn");
const userRoutes = require("./back-end/routes/userRoutes");
const loginRoutes = require("./back-end/routes/loginRoutes");
const auth = require("./back-end/controllers/auth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);
app.use(cors({ credentials: true }));

app.listen(5000, console.log("Server is work"));
