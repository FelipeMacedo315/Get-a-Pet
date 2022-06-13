const mongoose = require("mongoose");

const { Schema } = mongoose;

const petsModel = mongoose.model(
  "pets",
  new Schema(
    {
      animal: { type: String, required: true },
      peso: { type: Number },
      cor: { type: String, required: true },
      sexo: { type: String },
      imagens: { type: Array },
      disponivel: { type: Boolean },
      dono: { type: Object },
    },
    { timestamps: true }
  )
);

 module.exports = petsModel
