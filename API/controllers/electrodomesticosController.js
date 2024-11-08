const electrodomesticos = require("../models").Electrodomesticos_model;

module.exports = {
  list(req, res) {
    return electrodomesticos
      .findAll({})
      .then((electrodomesticos) => res.status(200).send(electrodomesticos))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    console.log(req.params.id);
    return electrodomesticos
      .findByPk(req.params.id)
      .then((electrodomesticos) => {
        console.log(electrodomesticos);
        if (!electrodomesticos) {
          return res.status(404).send({
            message: "electrodomesticos Not Found",
          });
        }
        return res.status(200).send(electrodomesticos);
      })
      .catch((error) => res.status(400).send(error));
  },
  createElectrodomestico(req, res) {
    const { nombre, marca, modelo, potencia_nominal, id_usuario } = req.body;
    bcrypt.hash(password, saltos, (error, hashedPassword) => {
      if (error) return res.status(500).send(error);
      return electrodomesticos
        .create({
          nombre: req.body.nombre,
          marca: req.body.marca,
          modelo: req.body.modelo,
          potencia_nominal: req.body.potencia_nominal,
          id_usuario: req.body.id_usuario,
        })
        .then((electrodomesticos) => {
          return res.status(201).send(electrodomesticos);
        })
        .catch((error) => res.status(400).send(error));
    });
  },

  updateElectrodomestico(req, res) {
    return electrodomesticos
      .findByPk(req.params.id)
      .then((electrodomesticos) => {
        if (!electrodomesticos) {
          return res
            .status(404)
            .send({ message: "Electrodomestico Not Found",

             });
        }

        const updatedData = {
           nombre, marca, modelo, potencia_nominal, id_usuario 
          } =
          req.body;

        if (nombre) {
          electrodomesticos.nombre = nombre;
        }
        if (marca) {
          electrodomesticos.marca = marca;
        }
        if (modelo) {
          electrodomesticos.modelo = modelo;
        }
        if (potencia_nominal) {
          electrodomesticos.potencia_nominal = potencia_nominal;
        }
        return electrodomesticos
          .save()
          .then(() => {
            return res.status(200).send(electrodomesticos);
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  deleteElectrodomestico(req, res) {
    return electrodomesticos
      .findByPk(req.params.id)
      .then((electrodomesticos) => {
        if (!electrodomesticos) {
          return res
            .status(404)
            .send({ message: "Electrodomestico Not Found" });
        }

        return electrodomesticos
          .destroy()
          .then(() => res.status(204).send({ message: 'Electrodomestico eliminado correctamente' }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
