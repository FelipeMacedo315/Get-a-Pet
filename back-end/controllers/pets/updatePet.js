const petsModel = require("../../models/pets");

async function updatePet(req, res) {
  const exactPetId = req.headers.idpet;
  const { animalPet, corPet, sexoPet, pesoPet } = req.body;

  if (req.files.length > 0) {
    const imagensPet = req.files.map((item) => {
      return item.originalname;
    });
    const updatePetFiles = await petsModel
      .updateOne(
        { _id: exactPetId },
        {
          imagens: imagensPet,
        }
      )
      .then(() => res.status(200).json({ msg: "Pet atualizado!" }))
      .catch(() => {
        res.status(422).json({ msg: "Não foi possivel atualizar o pet!" });
      });
  }

  if (animalPet && corPet && sexoPet && pesoPet) {
    const updateInfoPet = await petsModel
      .updateOne({ _id: exactPetId }, { animal: animalPet, sexo: sexoPet, cor: corPet, peso: pesoPet })
      .then(() => {
        res.status(200).json({ msg: "Pet foi atualizado!" });
      })
      .catch(() => res.status(422).json({ msg: "Não foi possivel atualizar os dados do pet! " }));
  }
}

module.exports = updatePet;
