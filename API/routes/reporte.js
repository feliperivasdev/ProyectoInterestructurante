var express = require("express");
var router = express.Router();
const reporteController =
  require("../controllers").reporteController;

router.get("/", reporteController.list);

router.get("/", reporteController.getById);

router.post("/", reporteController.createElectrodomestico);

router.put("/:id", reporteController.updateElectrodomestico);

router.delete("/:id", reporteController.deleteElectrodomestico);

module.exports = router;
