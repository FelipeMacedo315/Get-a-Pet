const usersModel = require("../../models/users");

function updateinfo(req, res) {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    res.status(422).json({ msg: "Todos os campos precisam estar corretamente prenchidos" });
  } else {
    usersModel.updateOne({ email: req.headers.email }, { nome: nome, email: email, senha: senha }, (err, ok) => {
      err ? res.status(422).json({ msg: "Houve um erro ao fazer a atualização." }) : null;
    });
    res.status(200).json({ msg: `${nome} seu dado foi atualizado com sucesso!` });
  }
}

module.exports = updateinfo;
