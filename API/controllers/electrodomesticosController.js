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

  electrodomesticos.create({
      nombre,
      marca,
      modelo,
      potencia_nominal,
      id_usuario
    })
    .then(() => {
      res.status(201).send({ message: "Electrodoméstico agregado correctamente " });
    })
    .catch((error) => {
      console.error("Error al crear el electrodoméstico:", error);
      res.status(400).send({ message: "Error al crear el electrodoméstico", error: error.message });
    });
},


  updateElectrodomestico(req, res) {
    return electrodomesticos
      .findByPk(req.params.id)
      .then((electrodomesticos) => {
        if (!electrodomesticos) {
          return res
            .status(404)
            .send({ message: "Electrodomestico no encontrado" });
        }

        const updatedData = ({
          nombre,
          marca,
          modelo,
          potencia_nominal,
          id_usuario,
        } = req.body);

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
            .send({ message: "Electrodomestico no encontrado" });
        }

        return electrodomesticos
          .destroy()
          .then(() => res.status(200).send({ message: "Electrodomestico eliminado correctamente" }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
