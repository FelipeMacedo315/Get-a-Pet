const petsModel = require("../../models/pets");

function deletePet(req, res) {
  const idPet = req.headers.idpet;

  petsModel.deleteOne({ _id: idPet }).then((data) => {
    if (data.deletedCount) {
      res.status(200).json({ msg: "O pet foi excluido..." });
    } else {
      res.status(422).json({ msg: "Não foi possivel excluir o pet!" });
    }
  });
}
module.exports = deletePet;
