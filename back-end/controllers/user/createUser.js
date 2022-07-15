const usersModel = require("../../models/users");
const jwt = require("jsonwebtoken");
const token = require("./token");

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

    const dataUserCreate = await usersModel.findOne({ email: email });
    token(dataUserCreate._id.toString());
    return res
      .status(200)
      .json({ msg: `${nome} sua conta foi criada com sucesso!`, keytoken: dataUserCreate._id.toString(), emailUser: dataUserCreate.email });
  }
}

module.exports = {
  dataUserRegister,
};
