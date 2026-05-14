const express = require('express')
const cors = require('cors')
require('dotenv').config()

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  rutas () {
    this.app.use('/juegos', require('../routes/juegosRoutes'))

    // manejo de errores
  
    this.app.use((err, req, res, next) => {
      console.error(err.stack)
      return res.status(404).json({ msg: 'Error. Pagina no encontrada' })
    })
    this.app.use((err, req, res, next) => {
      console.error(err.stack)
      return res.status(500).json({ msg: 'Internal Server Error' })
    })

    this.app.use('/equipo', require('../routes/equipoRoutes'))

    this.app.use('/api', require('../routes/loginRoute'))

    this.app.use(express.urlencoded({ extended: true }));
  }

  listen () {
    this.app.listen(this.port, '0.0.0.0', () => {
      console.log(`La API esta escuchando el el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
