const fs = require('fs').promises

const getEquipo = async (req, res) => {
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf8')
    const equipo = await JSON.parse(data)

    if (!equipo) {
      return res.status(404).json({ error: 'No se encontró la información del equipo' })
    }

    return res.status(200).json(equipo)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `error ${error}` })
  }
}

module.exports = {getEquipo}