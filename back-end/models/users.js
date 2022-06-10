const conn = require("../db/conn");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersModel = mongoose.model(
  "users",
  new Schema(
    {
      nome: { type: String, required: true },
      email: { type: String, required: true },
      senha: { type: String, required: true },
      token:{type:Object}
    },
    {
      timestamps: true,
    }
  )
);

module.exports = usersModel;
