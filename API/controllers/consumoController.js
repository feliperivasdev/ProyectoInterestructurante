const consumo = require("../models").Registro_consumo_model;
module.exports = {
  list(req, res) {
    return consumo
      .findAll({})
      .then((consumo) => res.status(200).send(consumo))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    console.log(req.params.id);
    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        console.log(consumo);
        if (!consumo) {
          return res.status(404).send({
            message: "consumo Not Found",
          });
        }
        return res.status(200).send(consumo);
      })
      .catch((error) => res.status(400).send(error));
  },
  createConsumo(req, res) {
    const { tiempo_consumo, consumo_energia, id_electrodomestico } = req.body;

    return consumo
      .create({
        tiempo_consumo: req.body.tiempo_consumo,
        consumo_energia: req.body.consumo_energia,
        id_electrodomestico: req.body.id_electrodomestico,
      })
      .then((nuevoConsumo) => {
        return res.status(201).send({ message: "Consumo creado correctamente" });
      })
      .catch((error) => {
        // Aquí estamos capturando el error correctamente
        return res.status(500).send({
          message: "Error al crear el consumo de energía",
          error: error.message, // Usamos error.message para el mensaje específico
        });
      });
  },
  updateConsumo(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        if (!consumo) {
          return res.status(404).send({ message: "Consumo no encontrado" });
        }

        const { tiempo_consumo, consumo_energia, id_electrodomestico } =
          req.body;

        if (tiempo_consumo) {
          consumo.tiempo_consumo = tiempo_consumo;
        }
        if (consumo_energia) {
          consumo.consumo_energia = consumo_energia;
        }
        if (id_electrodomestico) {
          consumo.id_electrodomestico = id_electrodomestico;
        }

        return consumo
          .save()
          .then(() => {
            return res.status(200).send({ message: "Consumo actualizado correctamente" });
          })
          .catch((error) =>
            res
              .status(400)
              .send({
                message: "Error al guardar el consumo",
                error: error.message,
              })
          );
      })
      .catch((error) =>
        res
          .status(400)
          .send({
            message: "Error al encontrar el consumo",
            error: error.message,
          })
      );
  },

  deleteConsumo(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        if (!consumo) {
          return res.status(404).send({ message: "Consumo no encontrado" });
        }
  
        return consumo
          .destroy()
          .then(() => res.status(200).send({ message: "Consumo eliminado correctamente" })) // Cambiado a 200 y mensaje en éxito
          .catch((error) => res.status(400).send());
      })
      .catch((error) => res.status(500).send());
  }
  ,
};
