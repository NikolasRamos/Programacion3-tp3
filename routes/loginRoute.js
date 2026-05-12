const express = require("express"); //trae la biblioteca de express/importa express
const router = express.Router(); //crea un router de express

const {login} = require('../controllers/loginController'); //importa la función login del controlador

router.post("/login", login); //define la ruta POST login y asigna la función login como controlador

module.exports = router; //exporta el router para usarlo en otros archivos  