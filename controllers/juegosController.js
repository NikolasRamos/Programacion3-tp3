const fs = require('fs').promises

const getJuegos = async (req, res) => {
  try {
    const data = await fs.readFile('./data/juegos.json', 'utf8')
    const juegos = await JSON.parse(data)

    if (!juegos) {
      return res.status(404).json({ error: 'No se encontraron los juegos' })
    }

    return res.status(200).json(juegos)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `error ${error}` })
  }
}

const getJuegosById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/juegos.json', 'utf8')
    const juegos = JSON.parse(data)

    const { id } = req.params

    const juegoId = juegos.find((s) => s.id === parseInt(id))

    if (!juegoId) {
      return res.status(404).json({ msg: `No existe el servicio con id ${id}` })
    }

    return res.status(200).json(juegoId)
  } catch (error) {
    console.log(error)
    return res.status(500).JSON({
      error: `No se pudo obtener el datalle del juego del id n° ${id}`
    })
  }
}

module.exports = { getJuegos, getJuegosById }