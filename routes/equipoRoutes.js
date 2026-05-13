const { Router } = require('express')
const { getEquipo} = require('../controllers/juegosController')

const rutas = Router()

rutas.get('/', getEquipo)

module.exports = rutas