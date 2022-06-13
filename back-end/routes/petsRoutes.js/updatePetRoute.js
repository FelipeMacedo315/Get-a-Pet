const express = require('express')
const updatePet = require('../../controllers/pets/updatePet')
const updatePetRoute = express.Router()

updatePetRoute.patch('/updatePet',updatePet)

module.exports = updatePetRoute