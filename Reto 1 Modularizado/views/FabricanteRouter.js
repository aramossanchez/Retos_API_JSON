const expresss = require ("express");
const router = expresss.Router();

const FabricanteController = require ("../controllers/FabricanteController.js");

router.get("/", FabricanteController.getAll);

router.get("/:id", FabricanteController.getById);

router.post("/", FabricanteController.postFabricante);

router.put("/:id", FabricanteController.updateFabricante);

router.delete("/:id", FabricanteController.deleteFabricante);

module.exports = router;