const petsModel = require("../../models/pets");
async function updatePet(req, res) {
  const exactPetId = req.headers.idpet;
  const { animalPet, corPet, sexoPet, pesoPet } = req.body;
  const updateInfoPet = await petsModel.updateOne(
    { _id: exactPetId },
    {
      animal: animalPet,
      cor: corPet,
      sexo: sexoPet,
      peso: pesoPet,
    }
  );
  res.send(updateInfoPet);
}

module.exports = updatePet;
