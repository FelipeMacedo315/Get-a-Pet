const petsModel = require("../../models/pets");
const token = require("../user/token");

function myPetsAdoption(req, res) {
  const { idkeyuser, emailuser } = req.headers;
  token(idkeyuser);
  petsModel
    .find({ "dono.email": emailuser })
    .sort("-createAt")
    .then((data) => {
      if (data.length) {
        res.status(200).json({ yourPetsAdoption: data });
      } else {
        res.status(422).json({ msg: "Você ainda não tem nenhum pet cadastrado para adoção..." });
      }
    });
}
module.exports = myPetsAdoption;
