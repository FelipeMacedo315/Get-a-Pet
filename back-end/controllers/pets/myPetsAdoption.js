const petsModel = require("../../models/pets")

function myPetsAdoption(req,res) {
  const header = req.headers.email
  petsModel.find({'dono.email':header}).sort('-createAt').then((data)=>{
    if (data.length) {
       res.status(200).json({yourPetsAdoption:data})
    } else {
      res.status(422).json({msg:"Você ainda não tem nenhum pet cadastrado para adoção..."})
    }
  })
}
module.exports = myPetsAdoption