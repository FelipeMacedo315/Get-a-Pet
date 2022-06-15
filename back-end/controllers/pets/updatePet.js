const petsModel = require("../../models/pets");

async function updatePet(req, res) {
  const exactPetId = req.headers.idpet;
  const { animalPet, corPet, sexoPet, pesoPet } = req.body;

  const imagensPet = req.files.map((item) => {
    return item.originalname;
  });


  const updateInfoPet = await petsModel.updateOne(
    { _id: exactPetId },
    {
      animal: animalPet,
      cor: corPet,
      sexo: sexoPet,
      peso: pesoPet,
      imagens: imagensPet,
    }
  );
  if (updateInfoPet.modifiedCount) {
    res.status(200).json({ msg: "Os dados do seu pet foram atualizados!" });
  } else {
    res
      .status(422)
      .json({ msg: "Os dados não puderam ser atualizados por algum motivo!" });
  }
}

module.exports = updatePet;
