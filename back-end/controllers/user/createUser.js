const usersModel = require("../../models/users");
const jwt = require("jsonwebtoken");
const token = require("./token");

function formRegisterUser(req, res) {
  res.send("mknjnj");
}

async function dataUserRegister(req, res) {
  const { nome, email, senha } = req.body;

  const checkUser = await usersModel.findOne({ email: email });

  if (checkUser !== null) {
    return res.status(422).json({ msg: "Já existe alguem usando este email" });
  } else {
    const insertData = await usersModel.create({
      nome: nome,
      email: email,
      senha: senha,
    });

    token(email);

    return res
      .status(200)
      .json({ msg: `${nome} sua conta foi criada com sucesso!` });
  }
}

module.exports = {
  formRegisterUser,
  dataUserRegister,
};
