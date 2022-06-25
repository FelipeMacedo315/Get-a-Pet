const usersModel = require("../../models/users");
const jwt = require("jsonwebtoken");
const checkAuth = require("./checkToken");

async function login(req, res) {
  const { email, senha } = req.body;
  const checkLogin = await usersModel.findOne({ email: email });

  if (checkLogin === null) {
    res.status(422).json({ msg: "Email não registrado!" });
  } else {
    if (senha === checkLogin.senha) {
      res.status(200).json({ msg: "bem-vindo" });
    } else {
      res.status(422).json({ msg: "Senha inválida" });
    }
  }
}

function loginForm(req, res) {
  res.status(200).json({ msg: "Form de login" });
}
module.exports = {
  login,
  loginForm,
};
