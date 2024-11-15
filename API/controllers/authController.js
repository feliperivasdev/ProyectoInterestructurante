const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const usuario = require("../models").usuario_model;

// Cargar la clave secreta desde las variables de entorno
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

function generarToken(usuario) {
  const data = {
    nombre: usuarios.nombre,
    apellido: usuarios.apellido,
    cedula: usuarios.cedula,
    email: usuarios.email,
    password: usuarios.password,
    rol: usuarios.rol,
  };
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = {
  login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "correpo y contraseña son necesarios" });
    }
    let findUser;
    if (email) {
      findUser = usuario.findOne({
        where: {
          email,
        },
      });
    }
    findUser
      .then((usuarioEncontrado) => {
        if (!usuarioEncontrado) {
          return res.status(404).send({ message: "Usuario no encontrado" });
        }
        //Comparar contraseña
        bcrypt.compare(
          password,
          usuarioEncontrado.password,
          (error, passwordMatch) => {
            if (error) {
              return res.status(500).send({ message: "Error del servidor" });
            }
            if (!passwordMatch) {
              return res
                .status(401)
                .send({ message: "Credenciales incorrectas" });
            }
            //Generar token
            try {
              const token = generarToken(usuarioEncontrado);
              return res.status(200).send({
                token,
                nombre: usuarioEncontrado.nombre,
    apellido: usuarioEncontrado.apellido,
    cedula: usuarioEncontrado.cedula,
    email: usuarioEncontrado.email,
    password: usuarioEncontrado.password,
    rol: usuarioEncontrado.rol,
              });
            } catch (error) {
              return res.status(500).send({ message: "Error al crear token" });
            }
          }
        );
      })
      .catch((error) => {
        return res.status(500).send({ message: "Error interno del servidor" });
      });
  },
};