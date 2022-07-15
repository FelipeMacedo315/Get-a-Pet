const usersModel = require("../../models/users");
const jwt = require("jsonwebtoken");
const token = require("./token");

async function login(req, res) {
  const { email, senha } = req.body;
  const checkLogin = await usersModel.findOne({ email: email });

  if (checkLogin === null) {
    res.status(422).json({ msg: "Email não registrado!" });
  } else {
    if (senha === checkLogin.senha) {
      res.status(200).json({
        msg: "bem-vindo",
        nomeUser: checkLogin.nome,
        emailUser: checkLogin.email,
        keytoken: checkLogin._id.toString(),
      });
      token(email);
    } else {
      res.status(422).json({ msg: "Senha inválida" });
    }
  }
}

module.exports = {
  login,
};
