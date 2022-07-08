const petsModel = require("../../models/pets");
const usersModel = require("../../models/users");

async function createPets(req, res) {
  const exactUser = req.headers.email;
  const { animal, peso, cor, sexo } = req.body;

  const nomeArchive = req.files.map((item) => item.filename);

  if (animal === "undefined" || peso === "undefined" || cor === "undefined" || sexo === "undefined") {
    res.status(422).json({ msg: "Os campos precisam estar prenchidos corretamente!" });
  } else {
    const donodata = await usersModel.findOne({ email: exactUser });
    const dataPet = await petsModel.create({
      animal: animal,
      peso: peso,
      cor: cor,
      sexo: sexo,
      disponivel: true,
      imagens: nomeArchive,
      dono: {
        nome: donodata.nome,
        email: donodata.email,
        desde: donodata.createdAt,
      },
    });
    res.status(200).json({ msg: `${donodata.nome} seu pet foi ja esta disponivel para adoção!` });
  }
}

module.exports = createPets;
