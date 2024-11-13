var express = require("express");
var router = express.Router();
const consumoController =
  require("../controllers").consumoController;

router.get("/", consumoController.list);

router.get("/:id", consumoController.getById);

router.post("/", consumoController.createConsumo);

router.put("/:id", consumoController.updateConsumo);

router.delete("/:id", consumoController.deleteConsumo);

module.exports = router;