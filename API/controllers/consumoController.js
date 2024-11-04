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
    bcrypt.hash(password, saltos, (error, hashedPassword) => {
      if (error) return res.status(500).send(error);
      return consumo
        .create({
          tiempo_consumo,
          consumo_energia,
          id_electrodomestico,
        })
        .then((consumo) => {
          return res.status(201).send(consumo);
        })
        .catch((error) => res.status(400).send(error));
    });
  },

  updateConsumo(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        if (!consumo) {
          return res.status(404).send({ message: "Usuario Not Found" });
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
            return res.status(200).send(consumo);
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  deleteConsumo(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        if (!consumo) {
          return res
            .status(404)
            .send({ message: "Electrodomestico Not Found" });
        }

        return consumo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};