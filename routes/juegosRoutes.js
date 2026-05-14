const { Router } = require('express')
const { getJuegos, getJuegosById } = require('../controllers/juegosController')

const rutas = Router()

rutas.get('/', getJuegos)
rutas.get('/:id', getJuegosById)

module.exports = rutas
