const petsModel = require("../../models/pets");

async function updatePet(req, res) {
  const exactPetId = req.headers.idpet;
  const { animalPet, corPet, sexoPet, pesoPet } = req.body;

  const imagensPet = req.files.map((item) => {
    return item.originalname;
  });
  console.log(imagensPet);

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
  res.send(req.files);
}

module.exports = updatePet;
