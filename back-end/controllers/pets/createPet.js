const petsModel = require("../../models/pets");
const usersModel = require("../../models/users");

async function createPets(req, res) {
  const exactUser = req.headers.email;
  const { animalPet, pesoPet, corPet, sexoPet } = req.body;
  const donodata = await usersModel.findOne({ email: exactUser });

  if (!animalPet || !pesoPet || !corPet || !sexoPet) {
    res.status(422).json({ msg: "Prencha os dados do seu pet corretamente" });
  } else {
    const dataPet = await petsModel.create({
      animal: animalPet,
      peso: pesoPet,
      cor: corPet,
      sexo: sexoPet,
      disponivel: true,
      dono: {
        nome: donodata.nome,
        email: donodata.email,
        desde: donodata.createdAt,
      },
    });

    res
      .status(200)
      .json({
        msg: `Parabens! ${donodata.nome} seu pet foi cadastrado e agora e só aguardar contato de adotantes`,
      });
  }
}

module.exports = createPets;
