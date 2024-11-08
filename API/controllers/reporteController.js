const reporte = require("../models").Reporte_model;

module.exports = {
  list(req, res) {
    return reporte
      .findAll({})
      .then((reporte) => res.status(200).send(reporte))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    console.log(req.params.id);
    return reporte
      .findByPk(req.params.id)
      .then((reporte) => {
        console.log(reporte);
        if (!reporte) {
          return res.status(404).send({
            message: "Reporte Not Found",
          });
        }
        return res.status(200).send(reporte);
      })
      .catch((error) => res.status(400).send(error));
  },
  createReporte(req, res) {
    const { periodo_inicio, periodo_fin, consumo_total, consumo_maximo, id_usuario } = req.body;
      if (error) return res.status(500).send(error);
      return reporte
        .create({
          periodo_inicio: req.body.periodo_inicio,
          periodo_fin: req.body.periodo_fin,
          consumo_total: req.body.consumo_total,
          consumo_maximo: req.body.consumo_maximo,
          id_usuario: req.body.id_usuario,
        })
        .then((reporte) => {
          return res.status(201).send(reporte);
        })
  },

  updateReporte(req, res) {
    return reporte
      .findByPk(req.params.id)
      .then((reporte) => {
        if (!reporte) {
          return res
            .status(404)
            .send({ message: "Reporte Not Found",

             });
        }

        const updatedData = {
            periodo_inicio, periodo_fin, consumo_total, consumo_maximo, id_usuario
          } =
          req.body;

        if (periodo_inicio) {
          reporte.periodo_inicio = periodo_inicio;
        }
        if (periodo_fin) {
          reporte.periodo_fin = periodo_fin;
        }
        if (consumo_total) {
          reporte.consumo_maximo = consumo_total;
        }
        if (id_usuario) {
          reporte.id_usuario = id_usuario;
        }
        return reporte
          .save()
          .then(() => {
            return res.status(200).send(reporte);
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  deleteReporte(req, res) {
    return reporte
      .findByPk(req.params.id)
      .then((reporte) => {
        if (!reporte) {
          return res
            .status(404)
            .send({ message: "Reporte Not Found" });
        }

        return reporte
          .destroy()
          .then(() => res.status(204).send({ message: 'Reporte eliminado correctamente' }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};