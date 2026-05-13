const usuarios = require('../data/usuarios.json');

const login = (req, res) => {
    const {usuario, password} = req.body;

    if (!usuario || !password) {
        return res.status(400).json({mensaje: "Faltan campos obligatorios"});
        console.log("Faltan campos obligatorios");
    }

    const user = usuarios.find(u => u.usuario === usuario && u.password === password);
    if (!user) {
        return res.status(404).json({mensaje: "Usuario o contraseña incorrectos"});
        console.log("Usuario o contraseña incorrectos");
    }

    if (user.password !== password) {
        return res.status(404).json({mensaje: "Usuario o contraseña incorrectos"});
        console.log("Usuario o contraseña incorrectos");
    }

    return res.status(200).json({mensaje: "Login exitoso"});
    console.log("Login exitoso");
}

module.exports = {login};