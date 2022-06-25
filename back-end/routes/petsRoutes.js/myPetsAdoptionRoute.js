
const express = require('express')
const myPetsAdoption = require('../../controllers/pets/myPetsAdoption')
const checkAuth = require('../../controllers/user/checkToken')
const myPetsAdoptionRoute = express.Router()

myPetsAdoptionRoute.get('/myPets',checkAuth,myPetsAdoption)

module.exports = myPetsAdoptionRoute